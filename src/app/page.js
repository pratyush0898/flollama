"use client";
import { LoginPopup, SignupPopup } from "@/components/Auth";
import CTA from "@/components/Page/CTA";
import Footer from "@/components/Page/Footer";
import Hero from "@/components/Page/Hero";
import NavBar from "@/components/Page/NavBar";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { redirect } from "next/navigation";

export default function Index() {
  const { toggleLogin, toggleSignup } = useAuthModal();
  const { user } = useAuth();

  if (user) redirect("/chat");

  return (
    <div className="page">
      <NavBar toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      <Hero toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      <CTA toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      <Footer toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      <LoginPopup />
      <SignupPopup />
      <ThemeToggle />
    </div>
  );
}
