"use client";
import React, { useState, useEffect } from "react";
import { Inter, Poppins, Ubuntu, Noto_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar.jsx";
import TopBar from "@/components/ui/TopBar";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

const noto = Noto_Sans({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "devanagari",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  display: "swap",
  variable: "--font-noto",
});

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Theme setup
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    }

    // Sidebar setup
    const savedSidebarState = localStorage.getItem("sidebar");
    const isLargeScreen = window.innerWidth >= 768;

    if (savedSidebarState !== null) {
      setIsOpen(savedSidebarState === "true");
    } else {
      setIsOpen(isLargeScreen);
    }

    const handleResize = () => {
      const isNowLarge = window.innerWidth >= 768;
      if (!isNowLarge) {
        setIsOpen(false);
        localStorage.setItem("sidebar", "false");
      } else {
        setIsOpen(true);
        localStorage.setItem("sidebar", "true");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem("sidebar", newState);
  };

  return (
    <html lang="en">
      <body
        className={`app-body ${inter.variable} ${poppins.variable} ${ubuntu.variable} ${noto.variable}`}
      >
        <Sidebar
          isOpen={isOpen}
          isDark={isDark}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
        />
        <div className="chat-section flex-1">
          <TopBar toggleSidebar={toggleSidebar} />
          {children}
        </div>
      </body>
    </html>
  );
}
