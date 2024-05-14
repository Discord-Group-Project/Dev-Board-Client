import {
  VerifyAccountSchemaType,
  useVerifyAccountForm,
} from "../../hooks/forms";
import { useVerifyAccountMutation } from "../../hooks/mutations";

export function VerifyAccountComp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useVerifyAccountForm();

  const { mutate, isPending } = useVerifyAccountMutation();

  const handleSubmitForm = (data: VerifyAccountSchemaType) => {
    mutate(data);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-[#FBBB18] w-[300px] shadow-lg rounded-md p-3">
        <div className="mb-4">
          <h1 className="text-center font-semibold text-xl">Verify Account</h1>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div>
            <label htmlFor="otp">OTP</label>
            <input type="number" id="otp" {...register("otp")} />
            {errors.otp ? <span>{errors?.otp?.message}</span> : null}
          </div>

          <div>
            <button type="submit" disabled={isPending}>
              {isPending ? "loading..." : "Verify Now"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
