import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "email required" })
    .email({ message: "email invalid" }),
});

export type SendVerificationSchemaType = z.infer<typeof schema>;

function useSendVerificationForm() {
  return useForm<SendVerificationSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
}

export { useSendVerificationForm };
