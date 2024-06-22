import Image from "next/image";
import Link from "next/link";
import { Api } from "@/lib";

async function getBlogs() {
  const res = await fetch("http://localhost:5000/api/v1/blogs/getAllBlog", {
    cache: "no-store",
  });
  return res?.json();
}

export default async function Blogs() {
  const { data: blogs } = await getBlogs();

  return (
    <>
      <header>
        <div className="grid grid-rows-2 grid-flow-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
          <div className="row-span-3">
            <Image
              src="/mike-uderevsky--fW75WfpAfc-unsplash.jpg"
              alt="Logo"
              width={1920}
              height={1080}
              className="rounded-lg object-cover h-[63vh] w-[60vw]"
            />
          </div>
          <div className="col-span-2">
            {" "}
            <Image
              src="/jigar-panchal-Cp4dn8_6Y5I-unsplash.jpg"
              alt="Logo"
              width={1920}
              height={1080}
              className="rounded-lg object-cover h-[30vh] w-[45vw]"
            />
          </div>
          <div className="row-span-2 col-span-2 ">
            {" "}
            <Image
              src="/mike-uderevsky--fW75WfpAfc-unsplash.jpg "
              alt="Logo"
              width={1920}
              height={1080}
              className="rounded-lg object-cover h-[30vh] w-[45vw]"
            />
          </div>
        </div>
      </header>

      <div className="text-sm breadcrumbs px-6  text-gray-500 dark:text-gray-400 sm:px-8">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
        </ul>
      </div>

      <section className="flex flex-row flex-wrap w-full items-center justify-center bg-[#030712] rounded-lg shadow-lg p-4">
        {blogs?.map((item: any) => (
          <Link
            href={`blogs/${item.id}`}
            key={item.id}
            className="w-[33%]  p-4 relative"
          >
            <Image
              src={item.image.url}
              alt="Logo"
              width={1920}
              height={1080}
              className="rounded-lg opacity-80 object-cover h-[40vh] w-[60vw]"
            />
            <div className="absolute bottom-10 left-5 p-4 text-white text-sm ">
              <p>{item.date}</p>
              <h1 className="text-lg  font-bold text-wrap mx-2 ">
                {item.title}
              </h1>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
