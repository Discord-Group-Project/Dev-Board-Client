export function Hero() {
  return (
    <div className="flex justify-center items-center flex-col w-[400] bg-gradient-to-b from-[#FBBB1800] to-[#FBBB184A] h-[500px]">
      <div className="p-3">
        <h1 className="text-2xl font-bold text-center">
          Where developer blogs
          <br /> meet community power!
        </h1>
        <p className="text-center font-medium mt-5">
          Create and grow your developer blog, newsletter, or team engineering
          blog effortlessly with DevBoard. Level up your writing using powerful
          AI features!
        </p>
      </div>
      <button className="bg-[#FBBB18] rounded-full px-4 py-1 font-medium my-5">
        Get Start
      </button>
    </div>
  );
}
