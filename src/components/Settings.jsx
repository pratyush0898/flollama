import React, { useEffect, useRef } from "react";
import { DangerousButton, DangerousOutlineButton } from "./ui/Button";
import SettinginnerHtml from "@/components/Settings/innerHtml";

const Settings = ({ toggleTheme, isDark, toggleSettings }) => {
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        toggleSettings();
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        toggleSettings();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [toggleSettings]);

  return (
    <div className="settings-wrapper">
      <div className="settings" ref={settingsRef}>
        <SettinginnerHtml
          toggleTheme={toggleTheme}
          isDark={isDark}
          toggleSettings={toggleSettings}
        />
      </div>
    </div>
  );
};

export default Settings;
