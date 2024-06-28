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
    <section>
      <div className="h-[calc(60vh-4vh)] bg-[#030712]  bg-cover bg-center bg-no-repeat rounded-lg shadow-lg px-4 py-2">
        <div className="bg-[url('/alex-perez-pEgsWN0kwbQ-unsplash.jpg')] h-full bg-cover bg-center bg-no-repeat w-full  flex flex-col items-center justify-center">
          <h1 className="text-3xl  font-bold  text-white w-50vw ">
            Share & grow the worlds knowledge!
          </h1>

          <p className="text-center text-white max-w-3xl mt-4 font-bold ">
            We want to connect the people who have knowledge to the people who
            need it, to bring together people with different perspectives so
            they can understand each other better, and to empower everyone to
            share their knowledge.
          </p>
        </div>
      </div>

      <main>
        <div className="search  rounded-lg shadow-lg px-8 py-4 flex flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full  border-2 bg-white  rounded-xl px-4 py-2 text-black"
          />
          <Button className="ml-4 rounded-xl">Search</Button>
        </div>

        <div className="text-sm breadcrumbs px-6  text-gray-500 dark:text-gray-400 sm:px-8">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Questions</Link>
            </li>
          </ul>
        </div>

        <div className="px-4 py-2 flex flex-row gap-4 mt-4 ">
          <div className="  flex flex-col justify-center items-center">
            {questions?.map((data: any) => (
              <div
                key={data?.id}
                className="flex flex-row items-center justify-center border-2 mb-4 ml-8 w-[75vw]  bg-[#847F7F] px-4 rounded-lg "
              >
                <div className="flex flex-row   items-start justify-center">
                  <Image
                    src={data?.owner[0]?.avatar?.url}
                    alt="avatar"
                    width={1920}
                    height={1080}
                    className="rounded-full w-[5vw] h-[5vw] mr-4"
                  />
                  <h1 className="text-sm font-bold  text-white">
                    {data?.owner?.fullname}
                  </h1>
                </div>
                <div>
                  <div className="px-4 py-2 flex flex-row items-center gap-4  justify-center">
                    <h2 className="text-2xl font-bold text-white">
                      {data?.title}
                    </h2>
                  </div>

                  <p className="text-sm px-8 py-2 text-white">
                    {data?.Questions}
                  </p>

                  {/* <div className="flex flex-row items-center  px-[2rem]  py-2 gap-3">
                    {data?.tags?.map((tag: any) => (
                      <span
                        key={tag?._id}
                        className="text-sm border-1 px-4 py-1 bg-[#0f0724] bg-opacity-25 text-white rounded-full font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="border-2 border-[red] w-[20vw] ">
            <button>Add Question</button>
          </div>
        </div>
      </main>
    </section>
  );
}
