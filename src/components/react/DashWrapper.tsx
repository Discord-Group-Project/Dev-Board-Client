import { useEffect } from "react";
import { useAuthStore } from "@features/store";
import { Toaster } from "react-hot-toast";

export function DashWrapper({ children }: { children: React.ReactNode }) {
  const auth = useAuthStore((state) => state.auth);

  useEffect(() => {
    if (!auth.isAuth) window.location.replace("/auth/signin");
  }, [auth]);

  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
