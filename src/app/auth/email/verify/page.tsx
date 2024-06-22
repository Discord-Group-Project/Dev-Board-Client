"use client";
import Link from "next/link";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { useVerifyEmailForm, VerifyEmailFormSchemaType } from "@/hooks/form";
import { Api } from "@/lib";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useVerifyEmailForm();

  const { mutate, isPending } = useMutation({
    mutationKey: ["verifyEmail"],
    mutationFn: (data: VerifyEmailFormSchemaType) =>
      Api.post("/users/email-verify", data).then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data.message);
      window.location.replace("/auth/signin");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error?.message);
    },
  });

  const handleVerifyEmail = (data: VerifyEmailFormSchemaType) => {
    mutate(data);
  };
  return (
    <>
      <section className="flex justify-center items-center h-screen mx-2">
        <form
          className="flex gap-8 flex-col bg-gray-800 rounded-lg p-3 w-full md:w-1/2 lg:w-1/3 m-1"
          onSubmit={handleSubmit(handleVerifyEmail)}
        >
          <h1 className="text-center font-semibold text-xl">Verify Email</h1>

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
            <button type="submit" className="btn btn-sm btn-primary w-full">
              [{isPending ? "Loading..." : "Verify"}]
            </button>
          </div>

          <div className="font-medium ">
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
