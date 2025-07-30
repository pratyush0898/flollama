"use client";
import NavBar from "@/components/Page/NavBar";
import Footer from "@/components/Page/Footer";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function RootLayout({ children }) {
  return (
    <div className="page">
      <NavBar />
      {children}
      <Footer />
      <ThemeToggle />
    </div>
  );
}
