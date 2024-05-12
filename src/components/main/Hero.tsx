export function Hero() {
  return (
    <div
      className="flex justify-center items-center flex-col w-[400] h-[500px]"
      id="hero"
    >
      <div className="p-3">
        <h1 className="text-2xl font-bold text-center text-white uppercase">
          Where developer blogs meet community power!
        </h1>
        <p className="text-center font-medium mt-5 text-white px-5">
          Create and grow your developer blog, newsletter, or team <br />
          engineering blog effortlessly with DevBoard. Level up your writing
          using powerful AI features!
        </p>
      </div>
      <button className="bg-secondary rounded-full px-5 py-2 font-medium my-5 text-white">
        Get Start
      </button>
    </div>
  );
}
