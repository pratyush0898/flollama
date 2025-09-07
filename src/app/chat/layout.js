"use client";
import AppShell from "@/layout/AppShell.jsx";
import UIProvider from "@/context/UIContext";
import "@/app/globals.scss";
import { ProtectedRouteProvider } from "@/context/ProtectedRoute";

export default function RootLayout({ children }) {
  return (
    <ProtectedRouteProvider>
      <UIProvider>
        <AppShell>{children}</AppShell>
      </UIProvider>
    </ProtectedRouteProvider>
  );
}
