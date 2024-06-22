import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "email required" })
    .email({ message: "email is not valid" }),
});

export type ForgetPasswordFormSchemaType = z.infer<typeof schema>;

function useForgetPasswordForm() {
  return useForm<ForgetPasswordFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
}

export { useForgetPasswordForm };
