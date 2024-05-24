import { useAuthStore } from "@features/store";

export function UserProfile({ userId }: any) {
  const auth = useAuthStore((state) => state.auth);

  return (
    <div>
      <h1>{auth.user.fullname}</h1>
      <h2>{userId}</h2>
    </div>
  );
}
