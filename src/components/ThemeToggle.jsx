"use client";
import React from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // Use saved user theme
      setIsDark(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // No saved theme, use system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
