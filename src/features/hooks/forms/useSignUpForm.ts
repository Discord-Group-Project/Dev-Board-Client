import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z
  .object({
    fullname: z
      .string({ required_error: "full name required" })
      .min(4, { message: "full name most be 4 characters" }),
    username: z
      .string({ required_error: "user name required" })
      .min(4, { message: "username most be 4 characters" }),
    email: z
      .string({ required_error: "email required" })
      .email({ message: "email invalid" }),
    password: z
      .string({ required_error: "password required" })
      .min(8, { message: "password most be 8 characters" }),
    confirm_password: z.string({ required_error: "confirm password required" }),
    avatar: z.any(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export type SignUpFormSchemaType = z.infer<typeof schema>;

function useSignUpForm() {
  return useForm<SignUpFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      avatar: File,
    },
  });
}

export { useSignUpForm };
