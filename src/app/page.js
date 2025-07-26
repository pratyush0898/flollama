"use client";
import { LoginPopup, SignupPopup } from "@/components/Auth";
import NavBar from "@/components/Page/NavBar";
import { PrimaryButton } from "@/components/ui/Button";
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
      <div>
        <h1 className="h1">Welcome to Flollama!</h1>
        <LoginPopup />
        <SignupPopup />
        <PrimaryButton
          onClick={() => {
            toggleLogin();
          }}
        >
          Login
        </PrimaryButton>
      </div>
      <ThemeToggle />
    </div>
  );
}
