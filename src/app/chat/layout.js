"use client";
import AppShell from "@/layout/AppShell.jsx";
import "@/app/globals.scss";
import UIProvider from "@/context/UIContext";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const { user } = useAuth();

  if (user === null) {
    redirect("/");
  }
  
  useEffect(() => {
    if (user === null) {
      redirect("/");
    }
  }, [user]);
  return (
    <UIProvider>
      <AppShell>{children}</AppShell>
    </UIProvider>
  );
}
