import { useMutation } from "@tanstack/react-query";
import { Api } from "../../../lib";
import { toast } from "react-hot-toast";
import { SignInFormSchemaType } from "../../forms";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store";

function useSignInMutation() {
  const navigate = useNavigate();
  const signIn = useAuthStore((state) => state.signIn);

  return useMutation({
    mutationFn: (data: SignInFormSchemaType) => {
      return Api.post("/users/signin", data).then((res) => res.data);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.error(error?.response?.data?.message || error?.message);
    },
    onSuccess(data) {
      toast.success(data?.message);
      signIn(data.data);
      navigate("/");
    },
  });
}

export { useSignInMutation };
