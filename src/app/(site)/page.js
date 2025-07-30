"use client";
import { LoginPopup, SignupPopup } from "@/components/Auth";
import About from "@/components/Page/About";
import CTA from "@/components/Page/CTA";
import Hero from "@/components/Page/Hero";
import { useAuth } from "@/context/AuthContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { redirect } from "next/navigation";
import React from "react";

export default function Index() {
  const { toggleLogin, toggleSignup } = useAuthModal();
  const { user } = useAuth();

  if (user) redirect("/chat");

  return (
    <React.Fragment>
      <Hero toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      <About toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      <CTA toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      <LoginPopup />
      <SignupPopup />
    </React.Fragment>
  );
}
