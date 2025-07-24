"use client";
import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const toggleLogin = () => setLoginOpen((prev) => !prev);
  const toggleSignup = () => setSignupOpen((prev) => !prev);

  return (
    <AuthModalContext.Provider
      value={{
        isLoginOpen,
        isSignupOpen,
        toggleLogin,
        toggleSignup,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => useContext(AuthModalContext);
