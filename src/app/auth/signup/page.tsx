"use client";
import Link from "next/link";
import { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { SignUpFormSchemaType, useSignUpForm } from "@/hooks/form";
import { Api } from "@/lib";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

function Page() {
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);

  const passwordToggle = () => {
    setIsPassword(!isPassword);
  };

  const confirmPasswordToggle = () => {
    setIsConfirmPassword(!isConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignUpForm();

  const { mutate, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: any) =>
      Api.post("/users/register", data).then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data.message);
      window.location.replace("/auth/email/verify");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error?.message);
    },
  });

  const handleSignUp = (data: SignUpFormSchemaType) => {
    mutate({
      fullname: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen mx-2">
        <form
          className="flex gap-8 flex-col bg-gray-800 rounded-lg p-3 w-full md:w-1/2 lg:w-1/3 m-1"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <h1 className="text-center font-semibold text-xl">Sign Up</h1>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <SiNamecheap size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                {...register("name")}
              />
            </label>
            {errors?.name && (
              <p className="text-red-500 font-medium">
                {errors?.name?.message}
              </p>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <FaUserTie size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Username "
                {...register("username")}
              />
            </label>
            {errors?.username && (
              <p className="text-red-500 font-medium">
                {errors?.username?.message}
              </p>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <MdEmail size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Email Address"
                {...register("email")}
              />
            </label>
            {errors?.email && (
              <p className="text-red-500 font-medium">
                {errors?.email?.message}
              </p>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <MdOutlinePhoneAndroid size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Phone Number"
                {...register("phone")}
              />
            </label>
            {errors?.phone && (
              <p className="text-red-500 font-medium">
                {errors?.phone?.message}
              </p>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <TbPasswordFingerprint size={20} />
              <input
                type={isPassword ? "password" : "text"}
                className="grow"
                placeholder="Password"
                {...register("password")}
              />
              {isPassword ? (
                <FaEye size={22} onClick={passwordToggle} />
              ) : (
                <FaEyeSlash size={22} onClick={passwordToggle} />
              )}
            </label>
            {errors?.password && (
              <p className="text-red-500 font-medium">
                {errors?.password?.message}
              </p>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <TbPasswordFingerprint size={20} />
              <input
                type={isConfirmPassword ? "password" : "text"}
                className="grow"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {isConfirmPassword ? (
                <FaEye size={22} onClick={confirmPasswordToggle} />
              ) : (
                <FaEyeSlash size={22} onClick={confirmPasswordToggle} />
              )}
            </label>
            {errors?.confirmPassword && (
              <p className="text-red-500 font-medium">
                {errors?.confirmPassword?.message}
              </p>
            )}
          </div>

          <div>
            <button type="submit" className="btn btn-sm btn-primary w-full">
              Sign Up
            </button>
          </div>

          <div className="font-medium">
            <p>
              You have an account?{" "}
              <Link href="/auth/signin" className="text-primary">
                {isPending ? "Loading..." : "Sign In"}
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

export default Page;
