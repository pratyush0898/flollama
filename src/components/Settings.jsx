import React from "react";
import { DangerousButton, DangerousOutlineButton } from "./ui/Button";

const Settings = ({ toggleTheme, isDark, toggleSettings }) => {
  return (
    <div className="settings-wrapper">
      <div className="settings">
        <div className="topbar-setting">
          <div className="lhs">
            <span className="h5">Settings</span>
          </div>
          <div className="rhs" onClick={toggleSettings}>
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="16 96 333 333"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
        </div>
        <div className="main-setting">
          <div className="main-setting-item">
            <span className="main-setting-item-text h5">Apperance</span>
            <div className="main-setting-items-item">
              <span className="main-setting-items-item-text body">Theme</span>
              <button
                onClick={toggleTheme}
                className="setting-themetoggle body-small"
              >
                {isDark ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="20"
                      height="20"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z"></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="20"
                      height="20"
                    >
                      <path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z"></path>
                    </svg>
                  </>
                )}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
          <div className="main-setting-item">
            <span className="h5">Font Style</span>
            <div className="fonts">
              <div className="main-setting-items-item">
                <span className="main-setting-items-item-text body">
                  Primary
                </span>
                <button className="settings-font-info">
                  <span className="inter-info">Inter</span>
                </button>
              </div>
              <div className="main-setting-items-item">
                <span className="main-setting-items-item-text body">
                  Secondary
                </span>
                <button className="settings-font-info">
                  <span className="poppins-info">Poppins</span>
                </button>
              </div>
              <div className="main-setting-items-item">
                <span className="main-setting-items-item-text body">
                  Accent & Logo
                </span>
                <button className="settings-font-info">
                  <span className="ubuntu-info">Ubuntu</span>
                </button>
              </div>
            </div>
          </div>
          <div className="main-setting-item">
            <span className="main-setting-item-text h5">Privacy</span>
            <div className="main-setting-items-item">
              <span className="main-setting-items-item-text body">
                Clear All Conversations
              </span>
              <DangerousOutlineButton className="button-w-auto">
                <svg
                  data-testid="geist-icon"
                  width="18"
                  height="auto"
                  strokeLinejoin="round"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Clear</span>
              </DangerousOutlineButton>
            </div>
          </div>
          <div className="main-setting-item">
            <span className="main-setting-item-text h5">Session</span>
            <div className="main-setting-items-item">
              <span className="main-setting-items-item-text body">Logout</span>
              <DangerousButton className="button-w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="20"
                  height="auto"
                >
                  <path d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm10.44 4.5-1.97-1.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.97-1.97H6.75a.75.75 0 0 1 0-1.5Z"></path>
                </svg>
                <span>Logout</span>
              </DangerousButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
