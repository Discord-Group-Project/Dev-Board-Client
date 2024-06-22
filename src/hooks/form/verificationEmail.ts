import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "email required" })
    .email({ message: "email is not valid" }),
});

export type VerificationEmailFormSchemaType = z.infer<typeof schema>;

function useVerificationEmailForm() {
  return useForm<VerificationEmailFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
}

export { useVerificationEmailForm };
