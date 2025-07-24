// context/UIContext.jsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UIContext = createContext();

export const useUI = () => useContext(UIContext);

export default function UIProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem("sidebar", newState.toString());
  };

  const toggleSettings = () => {
    setIsSettingOpen((prev) => !prev);
  };

  return (
    <UIContext.Provider
      value={{
        isSidebarOpen,
        isSettingOpen,
        isSmallScreen,
        toggleSidebar,
        toggleSettings,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
