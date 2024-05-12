import { Link } from "react-router-dom";
import { useAuthStore } from "../../store";

export function Navbar() {
  const auth = useAuthStore((state) => state.auth);
  console.log(auth);

  return (
    <header className=" flex justify-between items-center p-4 bg-primary">
      <div className="text-2xl font-medium">
        <span className="text-white"> Dev</span>
        <span className="text-secondary"> Board</span>
      </div>
      <div className="flex items-center gap-10">
        <Link
          to="/auth/signin"
          className="bg-secondary rounded-lg px-4 py-1 font-medium text-white"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
