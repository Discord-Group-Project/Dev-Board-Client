"use client";

import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { Api } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export default function Questions() {
  const { data: questions } = useQuery({
    queryKey: ["questions"],
    queryFn: () =>
      Api.get("Questions/getAllQuestions").then((res) => res?.data?.data),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  console.log(questions);

  return (
    <section className="py-10 mt-10">
      <h1 className="text-3xl font-bold text-white text-center">
        All Questions
      </h1>

      <div className="flex flex-row justify-center gap-4 flex-wrap  items-center mt-16 mx-5">
        {questions?.map((item: any) => (
          <Link
            href="#"
            key={item?._id}
            className="flex items-center flex-wrap  gap-4 bg-blue-700 p-8 rounded-lg max-w-md hover-animate-wiggle"
          >
            <Image
              src={item?.owner?.avatar?.url}
              alt="avatar"
              width={100}
              height={100}
              className="rounded-full w-16 h-16"
            />
            <div className="flex flex-col">
              <h2 className="text-white text-3xl font-bold">
                {item?.owner?.username}
              </h2>
              <p className="text-white text-sm mt-1"> Asks</p>
            </div>

            <div>{item?.question}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
