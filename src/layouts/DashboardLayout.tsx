import { Outlet } from "react-router-dom";
import { useAuthStore } from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DashboardLayout() {
  const navigate = useNavigate();
  const auth = useAuthStore((state) => state.auth);

  useEffect(() => {
    if (!auth.isAuth) {
      navigate("/auth/signin");
    }
  }, [auth, navigate]);
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
}
