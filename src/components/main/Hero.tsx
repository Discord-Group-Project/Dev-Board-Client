import { motion as m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <AnimatePresence>
      <div
        className="flex justify-center items-center flex-col w-[400] h-[500px]"
        id="hero"
      >
        <div className="p-3">
          <m.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-center text-white uppercase"
          >
            Where developer blogs meet community power!
          </m.h1>
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center font-medium mt-5 text-white px-5"
          >
            Create and grow your developer blog, newsletter, or team <br />
            engineering blog effortlessly with DevBoard. Level up your writing
            using powerful AI features!
          </m.p>
        </div>
        <m.div
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileHover={{ scale: 1.1 }}
          className="my-5"
        >
          <Link
            to="/"
            className="bg-secondary rounded-full px-5 py-2 font-medium  text-white"
          >
            Get Start
            <i className="ri-arrow-right-line mx-1 font-semibold"></i>
          </Link>
        </m.div>
      </div>
    </AnimatePresence>
  );
}
