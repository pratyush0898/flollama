"use client";
import { LoginPopup, SignupPopup } from "@/components/Auth";
import About from "@/components/Page/About";
import CTA from "@/components/Page/CTA";
import Hero from "@/components/Page/Hero";
import { useAuth } from "@/context/AuthContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Index() {
  const { toggleLogin, toggleSignup } = useAuthModal();
  const { user, loading } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;

    if (user === null && pathname.startsWith("/chat")) {
      redirect("/");
    } else if (user && !pathname.startsWith("/chat")) {
      redirect("/chat");
    }
  }, [user, loading, pathname]);

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
