import React from "react";

const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`pri-button body ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


const SecondaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
    className={`sec-button body ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const OutlineButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`outline-button body ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const LinkButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`link-button body ${className}`}
      {...props}
      >
      {children}
    </button>
  );
};

const SidebarButton = ({ children, className = "", active, ...props }) => {
  return (
    <button
      className={`sidebar-button body-small ${active ? "sidebar-button-active" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const DangerousButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`dangerous-button body ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const DangerousOutlineButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`dangerous-outline-button body ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, OutlineButton, LinkButton, SidebarButton, DangerousButton, DangerousOutlineButton };
