"use client";
import { LoginPopup } from "@/components/Auth";
import { PrimaryButton } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { redirect } from "next/navigation";

export default function Index() {
  const { toggleLogin } = useAuthModal();
  const { user } = useAuth();
  if (user) redirect("/chat");

  return (
    
    <div className="chat">
      <h1 className="h1">Welcome to Flollama!</h1>
      <LoginPopup />
      <PrimaryButton onClick={() => {toggleLogin()}}>Login</PrimaryButton>
    </div>
  );
}
