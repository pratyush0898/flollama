// app/chat/AppShell.jsx
"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/ui/TopBar";

export default function AppShell({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Theme setup
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");

    setIsDark(theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);

    // Sidebar setup
    const savedSidebar = localStorage.getItem("sidebar");
    const isLargeScreen = window.innerWidth >= 768;
    setIsOpen(savedSidebar !== null ? savedSidebar === "true" : isLargeScreen);

    const handleResize = () => {
      const nowLarge = window.innerWidth >= 768;
      setIsOpen(nowLarge);
      localStorage.setItem("sidebar", nowLarge.toString());
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
    localStorage.setItem("sidebar", newState.toString());
  };

  return (
    <>
      <Sidebar isOpen={isOpen} isDark={isDark} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
      <div className="chat-section flex-1">
        <TopBar toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </>
  );
}
