"use client";
import Link from "next/link";
import { useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Api } from "@/lib";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import {
  useResetPasswordForm,
  ResetPasswordFormSchemaType,
} from "@/hooks/form";

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
  } = useResetPasswordForm();

  const { mutate, isPending } = useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: (data: ResetPasswordFormSchemaType) =>
      Api.post("/users/verify-forgot-password", data).then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data?.message);
      window.location.replace("/auth/signin");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error?.message);
    },
  });

  const handleResetPassword = async (data: ResetPasswordFormSchemaType) => {
    mutate(data);
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen mx-2">
        <form
          className="flex gap-8 flex-col bg-gray-800 rounded-lg p-3 w-full md:w-1/2 lg:w-1/3 m-1"
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <h1 className="text-center font-semibold text-xl">Reset Password</h1>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <MdOutlinePhoneAndroid size={20} />
              <input
                type="text"
                className="grow"
                placeholder="OTP"
                {...register("otp")}
              />
            </label>
            {errors?.otp && (
              <p className="text-red-500 font-medium">{errors?.otp?.message}</p>
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
              {isPending ? "Loading..." : "Reset Password"}
            </button>
          </div>

          <div className="font-medium">
            <p>
              Don t have an account?{" "}
              <Link href="/auth/signup" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

export default Page;
