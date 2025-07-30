import React from "react";
import { OutlineButton, PrimaryButton } from "../ui/Button";

const About = ({ toggleLogin, toggleSignup }) => {
  return (
    <div className="about">
      <div className="lhs">
        <img src="/author.png" />
      </div>
      <div className="rhs">
        <div className="text">
          <h1 className="h1">About us</h1>
          <p className="body-xlg">
            I'm Pratyush Kumar, a solo developer who built <span>flollama</span> to make AI chat simpler. It's a clean interface to run prompts, test ideas, and get answers — instantly.
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
    </div>
  );
};

export default About;
