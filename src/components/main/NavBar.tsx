import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className=" flex justify-between items-center p-4 bg-[#FBBB1880]">
      <div className="text-xl font-bold">DevBoard</div>
      <div className="flex items-center gap-10">
        <Link
          to="/auth/signin"
          className="bg-[#FBBB18] rounded-lg px-4 py-1 font-medium"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
