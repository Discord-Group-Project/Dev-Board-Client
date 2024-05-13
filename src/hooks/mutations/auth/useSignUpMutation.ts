import { useMutation } from "@tanstack/react-query";
import { Api } from "../../../lib";
import { toast } from "react-hot-toast";

function useSignUpMutation() {
  return useMutation({
    mutationFn: (data: unknown) => {
      return Api.post("/users/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => res);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.error(error?.response?.data?.message);
    },
    onSuccess(data) {
      toast.success(data?.data?.message);
    },
  });
}

export { useSignUpMutation };
