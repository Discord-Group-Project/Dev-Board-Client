import { SignInFormSchemaType, useSignInForm } from "../../hooks/forms";
import { useSignInMutation } from "../../hooks/mutations";

export function SignInComp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignInForm();

  const { mutate, isPending } = useSignInMutation();

  const handleSignIn = (data: SignInFormSchemaType) => {
    mutate(data);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-[#FBBB18] w-[300px] shadow-lg rounded-md p-3">
        <div className="mb-4">
          <h1 className="text-center font-semibold text-xl">Sign In</h1>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)}>
          <div>
            <label htmlFor="username">User Name</label>
            <input type="username" id="username" {...register("username")} />
            {errors.username ? <span>{errors?.username?.message}</span> : null}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="false"
              {...register("password")}
            />
            {errors.password ? <span>{errors.password?.message}</span> : null}
          </div>

          <div>
            <button type="submit" disabled={isPending}>
              {isPending ? "loading..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
