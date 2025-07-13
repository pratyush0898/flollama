import "./globals.scss";
import AppShell from "@/layout/AppShell.jsx";

export default function RootLayout({ children }) {
  return <AppShell>{children}</AppShell>;
}
