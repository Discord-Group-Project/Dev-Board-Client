import Image from "next/image";
import Link from "next/link";

async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/getAllBlog`,
    {
      cache: "no-store",
    }
  );
  const data = await res?.json();
  return data;
}

export default async function Blogs() {
  const { data: blogs } = await getBlogs();

  return (
    <>
      <section className="bg-gray-950 py-10 mt-10">
        <h1 className="text-3xl font-bold text-white text-center">All Blogs</h1>
        <div className="flex flex-row justify-center gap-4 flex-wrap  items-center mt-16 mx-5 ">
          {blogs?.map((item: any) => (
            <Link
              key={item?._id}
              href={`blogs/${item._id}`}
              className="relative isolate flex flex-col mx-4  gap-4 justify-end overflow-hidden  rounded-2xl p-4 mt-4 object-cover h-52 w-96 shadow-lg hover-animate-wiggle"
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
    </>
  );
}
