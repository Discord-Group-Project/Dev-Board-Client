import { useEffect } from "react";
import { useAuthStore } from "@features/store";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@features/lib";

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const auth = useAuthStore((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) window.location.replace("/");
  }, [auth]);

  return (
    <>
      {children}
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} client={queryClient} />
    </>
  );
}
