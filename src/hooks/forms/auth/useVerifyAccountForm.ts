import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  otp: z
    .string({ required_error: "otp required" })
    .min(4, { message: "otp most be 4 characters" }),
});

export type VerifyAccountSchemaType = z.infer<typeof schema>;

function useVerifyAccountForm() {
  return useForm<VerifyAccountSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      otp: undefined,
    },
  });
}

export { useVerifyAccountForm };
