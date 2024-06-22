import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  otp: z
    .string({ required_error: "OTP required" })
    .min(4, { message: "OTP most be 4 characters" }),
});

export type VerifyEmailFormSchemaType = z.infer<typeof schema>;

function useVerifyEmailForm() {
  return useForm<VerifyEmailFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      otp: "",
    },
  });
}

export { useVerifyEmailForm };
