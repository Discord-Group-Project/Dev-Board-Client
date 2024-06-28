import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

async function getBlogs() {
  const res = await fetch("http://localhost:5000/api/v1/blogs/getAllBlog", {
    cache: "no-store",
  });
  const data = await res?.json();
  return data;
}

async function getQuestions() {
  const res = await fetch(
    "http://localhost:5000/api/v1/Questions/getAllQuestions",
    {
      cache: "no-store",
    }
  );
  const data = await res?.json();
  return data;
}

export default async function Home() {
  const { data: blogs } = await getBlogs();
  const { data: questions } = await getQuestions();

  return (
    <>
      <section className="text-center my-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold ltim">
          We’re WordsFlow. See our thoughts, stories & ideas.
        </h1>
        <p className="text-xl inter mt-10">
          We’re WordsFlow. See our thoughts, stories & ideas. We are a community
          of developers who share their knowledge.
        </p>
        <Link href="/blogs">
          <Button className="mt-16">Get Started</Button>
        </Link>
      </section>

      <section className="bg-gray-900 py-10 mt-10">
        <h1 className="text-3xl font-bold text-white text-center">
          Trending Posts
        </h1>
        <div className="flex flex-row justify-center gap-4 flex-wrap  items-center mt-16 mx-5">
          {blogs?.map((item: any) => (
            <Link
              key={item?._id}
              href={`blogs/${item._id}`}
              className="relative isolate flex flex-col mx-4  gap-4 justify-end overflow-hidden  rounded-2xl p-4 mt-4 object-cover h-52 w-96 "
            >
              <Image
                src={item?.image?.url}
                alt="avatar"
                width={100}
                height={100}
                className="rounded-lg absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/35 p-5">
                <h3 className="text-xs font-bold text-white">
                  {item?.createdAt?.substring(0, 10)}
                </h3>
                <p className="text-2xl my-4">{item?.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-10 mt-10">
        <h1 className="text-3xl font-bold text-white text-center">
          Top Questions
        </h1>

        <div className="flex flex-row justify-center gap-4 flex-wrap  items-center mt-16 mx-5">
          {questions?.map((item: any) => (
            <Link
              href="#"
              key={item?._id}
              className="flex items-center flex-wrap  gap-4 bg-blue-700 p-8 rounded-lg max-w-md"
            >
              <Image
                src={item?.owner[0]?.avatar?.url}
                alt="avatar"
                width={100}
                height={100}
                className="rounded-full w-16 h-16"
              />
              <div className="flex flex-col">
                <h2 className="text-white text-3xl font-bold">
                  {item?.owner[0]?.username}
                </h2>
                <p className="text-white text-sm mt-1"> Asks</p>
              </div>

              <div>{item?.question}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
