import { Link } from "react-router-dom";
import { useAuthStore } from "../../store";
import { ThemeToggle } from "../common";
import { useSignOutMutation } from "../../hooks/mutations";

export function Navbar() {
  const auth = useAuthStore((state) => state.auth);
  const { mutate } = useSignOutMutation();

  return (
    <div className="navbar bg-primary">
      <div className="flex-1 text-2xl font-semibold">
        <span className="text-white">Dev</span>
        <span className="text-secondary">Board</span>
      </div>
      <div className="flex-none gap-2">
        <ThemeToggle />
        {auth.isAuth ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    mutate();
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/auth/signin"
            className="btn btn-active btn-secondary btn-sm"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
