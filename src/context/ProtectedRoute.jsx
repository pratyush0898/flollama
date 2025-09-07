"use client";
import { createContext, useContext, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

const ProtectedRouteContext = createContext();

export function ProtectedRouteProvider({ children }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (user === null && pathname.startsWith("/chat")) {
      router.replace("/");
    } else if (user && !pathname.startsWith("/chat")) {
      router.replace("/chat");
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <PulseLoader color="var(--color-text)" size={32} />
      </div>
    );
  }

  return (
    <ProtectedRouteContext.Provider value={{ user, loading }}>
      {children}
    </ProtectedRouteContext.Provider>
  );
}

export function useProtectedRoute() {
  return useContext(ProtectedRouteContext);
}
