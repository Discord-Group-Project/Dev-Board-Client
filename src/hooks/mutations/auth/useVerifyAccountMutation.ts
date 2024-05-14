import { useMutation } from "@tanstack/react-query";
import { Api } from "../../../lib";
import { toast } from "react-hot-toast";
import { VerifyAccountSchemaType } from "../../forms";
import { useNavigate } from "react-router-dom";

function useVerifyAccountMutation() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: VerifyAccountSchemaType) => {
      return Api.post("/users/email-verify", { otp: Number(data.otp) }).then(
        (res) => res.data
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.error(error?.response?.data?.message || error?.message);
    },
    onSuccess(data) {
      toast.success(data?.message);
      navigate("/auth/signin");
    },
  });
}

export { useVerifyAccountMutation };
