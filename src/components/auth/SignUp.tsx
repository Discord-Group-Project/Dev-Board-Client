import { SignUpFormSchemaType, useSignUpForm } from "../../hooks/forms";
import { useSignUpMutation } from "../../hooks/mutations";

export function SignUpComp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignUpForm();

  const { mutate, isPending } = useSignUpMutation();

  const handleSignUp = (data: SignUpFormSchemaType) => {
    const formData = new FormData();

    formData.append("fullname", data.fullname);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar[0]);
    mutate(formData);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-[#FBBB18] w-[300px] shadow-lg rounded-md p-3">
        <div className="mb-4">
          <h1 className="text-center font-semibold text-xl">Sign Up</h1>
        </div>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input type="name" id="name" {...register("fullname")} />
            {errors.fullname ? <span>{errors.fullname?.message}</span> : null}
          </div>

          <div>
            <label htmlFor="username">User Name</label>
            <input type="username" id="username" {...register("username")} />
            {errors.username ? <span>{errors?.username?.message}</span> : null}
          </div>

          <div>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" {...register("email")} />
            {errors.email ? <span>{errors.email?.message}</span> : null}
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
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              autoComplete="false"
              {...register("confirm_password")}
            />
            {errors.confirm_password ? (
              <span>{errors.confirm_password?.message}</span>
            ) : null}
          </div>

          <div>
            <label htmlFor="avatar">Avatar</label>
            <input type="file" id="avatar" {...register("avatar")} />
            {/* {errors.avatar ? <span>{errors?.avatar?.message}</span> : null} */}
          </div>

          <div>
            <button type="submit" disabled={isPending}>
              {isPending ? "loading..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
