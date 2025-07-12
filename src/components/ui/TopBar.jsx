"use client";
import React, { useEffect, useState } from "react";

const TopBar = ({ toggleSidebar }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize(); // initial check

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="topbar">
      {isSmallScreen && (
        <div className="icon">
          <svg
            width="25"
            height="auto"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            className="feather feather-sidebar"
            onClick={toggleSidebar}
          >
            <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
            <line x1="8" y1="4" x2="8" y2="20" />
          </svg>
        </div>
      )}
      <div className="flex items-center gap-[6px] w-auto h-[32px]">
        <span className="logo-small">flollama</span>
      </div>
      {isSmallScreen && (
        <div className="icon">
          <svg
            fill="currentColor"
            width="26"
            height="26"
            version="1"
            viewBox="200 200 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m498.29 238.78c-16.699-0.046875-32.719 6.5938-44.488 18.438l-104.89 104.89c-18.973 18.863-29.605 44.535-29.523 71.289v47.207h47.207c26.734 0.066406 52.387-10.566 71.238-29.523l104.94-104.95c11.773-11.805 18.383-27.797 18.371-44.469-0.007813-16.672-6.6328-32.656-18.418-44.449-11.785-11.793-27.766-18.426-44.438-18.441zm15.973 78.898-104.89 104.89c-11.316 11.391-26.719 17.777-42.773 17.734h-6.9023v-6.9023c-0.058593-16.051 6.3086-31.453 17.684-42.773l104.94-104.95c4.1445-4.6328 10.016-7.3555 16.23-7.5312 6.2148-0.17188 12.23 2.2227 16.625 6.6172 4.3984 4.3984 6.7891 10.41 6.6172 16.625-0.17188 6.2148-2.8945 12.086-7.5312 16.23z"></path>{" "}
            <path d="m299.24 561.22h181.37c16.031 0 31.41-6.3711 42.75-17.707 11.336-11.34 17.707-26.719 17.707-42.75v-80.609h-40.305v80.609c0 5.3438-2.125 10.469-5.9023 14.25-3.7812 3.7773-8.9062 5.9023-14.25 5.9023h-181.37c-5.3477 0-10.473-2.125-14.25-5.9023-3.7812-3.7812-5.9023-8.9062-5.9023-14.25v-181.37c0-5.3477 2.1211-10.473 5.9023-14.25 3.7773-3.7812 8.9023-5.9023 14.25-5.9023h80.609v-40.305h-80.609c-16.035 0-31.414 6.3672-42.75 17.707-11.34 11.336-17.707 26.715-17.707 42.75v181.37c0 16.031 6.3672 31.41 17.707 42.75 11.336 11.336 26.715 17.707 42.75 17.707z"></path>{" "}
          </svg>
        </div>
      )}
    </div>
  );
};

export default TopBar;
