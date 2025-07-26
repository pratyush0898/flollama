import React from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/ui/TopBar";
import Settings from "@/components/Settings";
import { useTheme } from "@/utils/ThemeProvider";
import { useUI } from "@/context/UIContext";

export default function AppShell({ children }) {
  const {
    isSidebarOpen,
    isSettingOpen,
    isSmallScreen,
    toggleSidebar,
    toggleSettings,
  } = useUI();
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      {isSettingOpen ? (
        <Settings
          toggleSettings={toggleSettings}
          toggleTheme={toggleTheme}
          isDark={isDark}
        />
      ) : (
        <></>
      )}
      <Sidebar
        isOpen={isSidebarOpen}
        isDark={isDark}
        toggleTheme={toggleTheme}
        toggleSidebar={toggleSidebar}
        toggleSettings={toggleSettings}
      />
      <div className="chat-section flex-1">
        <TopBar toggleSidebar={toggleSidebar} isSmallScreen={isSmallScreen} />
        {children}
      </div>
    </>
  );
}
