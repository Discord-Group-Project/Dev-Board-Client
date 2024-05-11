import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FBBB1800] to-[#FBBB184A]">
        <Outlet />
      </section>
    </>
  );
}
