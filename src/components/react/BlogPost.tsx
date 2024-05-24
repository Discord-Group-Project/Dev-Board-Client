import { queryClient } from "@features/lib";
import { useQuery } from "@tanstack/react-query";

export function BlogPosts({ id }: { id: string }) {
  const { data } = useQuery(
    {
      queryKey: [id],
      queryFn: () =>
        fetch(`https://dummyapi.io/data/v1/post/${id}`, {
          headers: {
            "app-id": "664f1c82524560522cb8c534",
          },
        }).then((res) => res.json()),
    },
    queryClient
  );

  return (
    <>
      <h1>{data?.text}</h1>
    </>
  );
}
