import { useMutation } from "@tanstack/react-query";
import { Api } from "../../../lib";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store";

function useSignOutMutation() {
  const navigate = useNavigate();
  const signOut = useAuthStore((state) => state.signOut);

  return useMutation({
    mutationFn: () => {
      return Api.post("/users/signout").then((res) => res.data);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      toast.error(error?.response?.data?.message || error?.message);
    },
    onSuccess(data) {
      console.log(data);
      toast.success(data?.message);
      signOut();
      navigate("/");
    },
  });
}

export { useSignOutMutation };
