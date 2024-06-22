"use client";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/lib";

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["current-user"],
    queryFn: () => Api.get("users/current-user").then((res) => res?.data?.data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data?.fullname}</h1>
    </div>
  );
}
