import { Itim } from "next/font/google";
import Image from "next/image";
import React, { use } from "react";

const Questions = [
  {
    id: 1,
    img: "http://res.cloudinary.com/dxpahuuq1/image/upload/v1715869967/devBoard/jvezaxuwzgiocny47ptj.jpg",
    userName: "@eve",
    ask: 105,
    question:
      "How to get groupby a dataframe and aggregate values when columns to be aggregated are discovered dynamically?",
    tags: ["react", "javascript", "frontend"],
  },
  {
    id: 2,
    img: "http://res.cloudinary.com/dxpahuuq1/image/upload/v1715869967/devBoard/jvezaxuwzgiocny47ptj.jpg",
    userName: "@sarah",
    ask: 1050,
    question:
      "How to get groupby a dataframe and aggregate values when columns to be aggregated are discovered dynamically?",
    tags: ["python", "django", "javascript"],
  },
  {
    id: 3,
    img: "http://res.cloudinary.com/dxpahuuq1/image/upload/v1715869967/devBoard/jvezaxuwzgiocny47ptj.jpg",
    userName: "@johndoe",
    ask: 1032,
    question:
      "How to get groupby a dataframe and aggregate values when columns to be aggregated are discovered dynamically?",
    tags: ["react", "javascript", "frontend"],
  },
];

const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export function TopQuestions() {
  return (
    <div className="container mx-auto  px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col justify-center items-center text-4xl  my-6 w-full h-full ">
        <h3 className=" text-white text-3xl font-bold">Top Questions</h3>

        <div className="flex  flex-row justify-center gap-4 flex-wrap  items-center mt-16  ">
          {Questions.map((item) => {
            return (
              <div
                key={item.id}
                className=" p-2 bg-blue-500 rounded-lg shadow-md px-4 w-[24rem]"
              >
                <div className="flex items-center flex-wrap  gap-4">
                  <Image
                    src={item.img}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="rounded-full w-16 h-16"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-white text-3xl font-bold">
                      {item.userName}
                    </h2>
                    <p className="text-white text-sm mt-1">{item.ask} Asks</p>
                  </div>
                </div>
                <p className="text-white w-96 text-xs  px-16 mt-4">
                  {item.question}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
