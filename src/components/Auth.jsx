import React, { useEffect, useRef } from "react";
import LogininnerHtml from "./Login/innerHtml";
import SignupinnerHtml from "./Signup/innerHtml";

const LoginPopup = ({ toggleLogin }) => {
  const loginRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        toggleLogin();
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        toggleLogin();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [toggleLogin]);

  return (
    <div className="auth-wrapper">
      <div className="auth" ref={loginRef}>
        <LogininnerHtml toggleLogin={toggleLogin} />
      </div>
    </div>
  );
};

const SignupPopup = ({ toggleSignup }) => {
  const signupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (signupRef.current && !signupRef.current.contains(event.target)) {
        toggleSignup();
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        toggleSignup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [toggleSignup]);

  return (
    <div className="auth-wrapper">
      <div className="auth" ref={signupRef}>
        <SignupinnerHtml toggleSignup={toggleSignup} />
      </div>
    </div>
  );
};

export { LoginPopup, SignupPopup };
