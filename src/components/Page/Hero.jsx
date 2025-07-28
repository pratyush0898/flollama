"use client";
import React from "react";
import { OutlineButton, PrimaryButton } from "../ui/Button";

const Hero = ({ toggleLogin, toggleSignup }) => {
  return (
    <div className="hero">
      <div className="info">
        <div className="text">
          <span className="logo-lsm">flollama</span>
          <h1 className="biggest">Your AI Assistant for Everything</h1>
          <p className="body-xlg">
            Chat, code, learn, and explore — all in one place. <br />
            Online, fast, and completely free.
          </p>
        </div>
        <div className="action-buttons">
          <OutlineButton onClick={toggleLogin}>Login</OutlineButton>
          <PrimaryButton onClick={toggleSignup}>
            Signup
            <svg
              height="14"
              width="auto"
              viewBox="0 0 6 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.21967 0.73013C0.512563 0.42329 0.987437 0.42329 1.28033 0.73013L5.78033 5.44442C6.07322 5.75126 6.07322 6.24874 5.78033 6.55558L1.28033 11.2699C0.987437 11.5767 0.512563 11.5767 0.21967 11.2699C-0.0732233 10.963 -0.0732233 10.4655 0.21967 10.1587L4.18934 6L0.21967 1.8413C-0.0732233 1.53446 -0.0732233 1.03697 0.21967 0.73013Z" />
            </svg>
          </PrimaryButton>
        </div>
      </div>
      <div className="img"></div>
    </div>
  );
};

export default Hero;
