"use client";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/lib";

export default function Dashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["current-users"],
    queryFn: () => Api.get("users/current-user").then((res) => res?.data?.data),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <h1>{data?.fullname}</h1>
    </div>
  );
}
