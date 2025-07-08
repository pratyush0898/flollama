import React from "react";

const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`pri-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SecondaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`sec-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const OutlineButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`outline-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Link = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`link-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SidebarButton = ({ children, className = "", active, ...props }) => {
  return (
    <button
      className={`sidebar-button ${active ? "sidebar-button-active" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, OutlineButton, Link, SidebarButton };
