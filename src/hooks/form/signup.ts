import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z
    .string({ required_error: "name required" })
    .min(3, { message: "name most be 3 characters" }),
  username: z
    .string({ required_error: "user name required" })
    .min(4, { message: "username most be 4 characters" }),
  email: z
    .string({ required_error: "email required" })
    .email({ message: "email is not valid" }),
  phone: z
    .string({ required_error: "phone required" })
    .min(10, { message: "phone most be 10 characters" })
    .max(10, { message: "phone most be 10 characters" }),
  password: z
    .string({ required_error: "password required" })
    .min(8, { message: "password most be 8 characters" }),
  confirmPassword: z
    .string({ required_error: "confirm password required" })
    .min(8, { message: "confirm password most be 8 characters" }),
});

export type SignUpFormSchemaType = z.infer<typeof schema>;

function useSignUpForm() {
  return useForm<SignUpFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });
}

export { useSignUpForm };
