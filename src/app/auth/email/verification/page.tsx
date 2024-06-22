"use client";
import {
  useVerificationEmailForm,
  VerificationEmailFormSchemaType,
} from "@/hooks/form";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { Api } from "@/lib";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useVerificationEmailForm();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: VerificationEmailFormSchemaType) =>
      Api.post("/users/resend-email", data).then((res) => res.data),
    onSuccess: (data: any) => {
      toast.success(data?.message);
      window.location.replace("/auth/email/verify");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error?.message);
    },
  });

  const handleEmailVerification = async (
    data: VerificationEmailFormSchemaType
  ) => {
    mutate(data);
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen mx-2">
        <form
          className="flex gap-8 flex-col bg-gray-800 rounded-lg p-3 w-full md:w-1/2 lg:w-1/3 m-1"
          onSubmit={handleSubmit(handleEmailVerification)}
        >
          <h1 className="text-center font-semibold text-xl">
            Send Verification Email
          </h1>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <MdEmail size={20} />
              <input
                type="text"
                className="grow"
                placeholder="email"
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
            <button type="submit" className="btn btn-sm btn-primary w-full">
              {isPending ? "Loading..." : "Send Verification Email"}
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
