import React from "react";
import { OutlineButton, PrimaryButton, SecondaryButton } from "../ui/Button";
import Link from "next/link";

const CTA = ({ toggleLogin, toggleSignup }) => {
  return (
    <div className="cta">
      <div className="text">
        <h1 className="h1">Your AI Assistant for Everything</h1>
        <p className="body-xlg">
          Chat, code, learn, and explore — all in one place. <br />
          Online, fast, and completely free.
        </p>
      </div>
      <div className="action-buttons">
        <Link
          href={"https://github.com/pratyush0898/flollama.git"}
          target="_blank"
        >
          <SecondaryButton>
            View on
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0C15.525 0 20 4.58819 20 10.2529C19.9995 12.4012 19.3419 14.4952 18.1198 16.2402C16.8977 17.9852 15.1727 19.2933 13.1875 19.9804C12.6875 20.0829 12.5 19.7625 12.5 19.4934C12.5 19.1474 12.5125 18.0452 12.5125 16.6738C12.5125 15.7126 12.2 15.0975 11.8375 14.777C14.0625 14.5207 16.4 13.6492 16.4 9.71466C16.4 8.58684 16.0125 7.67689 15.375 6.95918C15.475 6.70286 15.825 5.65193 15.275 4.24215C15.275 4.24215 14.4375 3.9602 12.525 5.29308C11.725 5.06239 10.875 4.94704 10.025 4.94704C9.175 4.94704 8.325 5.06239 7.525 5.29308C5.6125 3.97301 4.775 4.24215 4.775 4.24215C4.225 5.65193 4.575 6.70286 4.675 6.95918C4.0375 7.67689 3.65 8.59965 3.65 9.71466C3.65 13.6364 5.975 14.5207 8.2 14.777C7.9125 15.0334 7.65 15.4819 7.5625 16.1484C6.9875 16.4175 5.55 16.8533 4.65 15.3025C4.4625 14.9949 3.9 14.2388 3.1125 14.2516C2.275 14.2644 2.775 14.7386 3.125 14.9308C3.55 15.1743 4.0375 16.0843 4.15 16.3791C4.35 16.9558 5 18.058 7.5125 17.5838C7.5125 18.4425 7.525 19.2499 7.525 19.4934C7.525 19.7625 7.3375 20.0701 6.8375 19.9804C4.8458 19.3007 3.11342 17.9952 1.88611 16.2492C0.658808 14.5031 -0.0011006 12.4052 1.37789e-06 10.2529C1.37789e-06 4.58819 4.475 0 10 0Z" />
            </svg>
          </SecondaryButton>
        </Link>
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
  );
};

export default CTA;
