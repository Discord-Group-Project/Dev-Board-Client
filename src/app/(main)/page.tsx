import { Button, TopQuestions, TrandingPost } from "@/components";
import Image from "next/image";
import { Itim, Poppins } from "next/font/google";
import { RxDoubleArrowDown } from "react-icons/rx";

const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div className="w-full h-[calc(100vh-4rem)]  bg-[url('/abstract-6047465_1920.jpg')] bg-cover bg-center bg-no-repeat ">
        <div >
          <div className="w-full h-full flex flex-col items-center justify-start">
            <h1
              className={`text-6xl font-bold mt-32 text-white ${PoppinsFont.className}`}
            >
              We’re WordsFlow. See our <br /> thoughts, stories & ideas.
            </h1>
            <p
              className={`text-xl mt-16 w-[60%] leading-relaxed text-white ${PoppinsFont.className}`}
            >
              Browse our HTML5 responsive Blog templates below. You can easily
              customize any of our Blog website templates with Webflow's
              code-free design tools, then connect your new Blog website to our
              powerful CMS, and launch it today new Blog website to our powerful
              CMS, and launch it today new Blog website to
            </p>

            <Button className="mt-16">Get Started</Button>

            <button className="mt-16 animate-bounce text-3xl">
              {" "}
              <RxDoubleArrowDown />
            </button>
          </div>
        </div>
      </div>
      <TrandingPost />
      <TopQuestions />
    </>
  );
}
