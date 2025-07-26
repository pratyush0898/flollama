"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { auth, googleProvider } from "@/firebase/firebase.js";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
  }, []);

  const login = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("Signed in user:", user);
      })
      .catch((error) => {
        console.error("Google Sign-in Error:", error);
        console.log("Login failed: " + error.message);
      });
  };
  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
