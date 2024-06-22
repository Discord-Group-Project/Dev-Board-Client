import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  otp: z
    .string({ required_error: "OTP required" })
    .min(4, { message: "OTP most be 4 characters" }),
  password: z
    .string({ required_error: "password required" })
    .min(8, { message: "password most be 8 characters" }),
  confirmPassword: z
    .string({ required_error: "confirm password required" })
    .min(8, { message: "confirm password most be 8 characters" }),
});

export type ResetPasswordFormSchemaType = z.infer<typeof schema>;

function useResetPasswordForm() {
  return useForm<ResetPasswordFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
}

export { useResetPasswordForm };
