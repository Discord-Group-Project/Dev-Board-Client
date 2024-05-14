import { Outlet } from "react-router-dom";
import { useAuthStore } from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AuthLayout() {
  const navigate = useNavigate();
  const auth = useAuthStore((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <>
      <section className="bg-gradient-to-b from-[#FBBB1800] to-[#FBBB184A]">
        <Outlet />
      </section>
    </>
  );
}
