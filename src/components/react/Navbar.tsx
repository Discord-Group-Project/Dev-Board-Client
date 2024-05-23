import { Api, queryClient } from "@features/lib";
import { useAuthStore } from "@features/store/index";
import { ThemeToggle } from "./ToggleTheme";
import { useMutation } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, { Toaster } from "react-hot-toast";
export const prerender = false;

export function Navbar() {
  const auth = useAuthStore((state) => state.auth);
  const storeSignOut = useAuthStore((state) => state.signOut);

  const { mutate } = useMutation(
    {
      mutationFn: () => Api.post("/users/signout").then((res) => res.data),
      onSuccess: (data: any) => {
        storeSignOut();
        toast.success(data.message);
      },
      onError: (err: any) => {
        toast.error("error to sign out");
      },
    },
    queryClient
  );

  const handleSignOut = () => {
    mutate();
  };

  return (
    <>
      <div className="flex gap-2">
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
                  src={auth.user.avatar.url}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/dashboard" className="justify-between">
                  Dashboard
                </a>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <a
            href="/auth/signin"
            className="btn  btn-accent btn-sm rounded-full text-white px-5"
          >
            Sign In
          </a>
        )}
      </div>
      <ReactQueryDevtools initialIsOpen={false} client={queryClient} />
      <Toaster />
    </>
  );
}
