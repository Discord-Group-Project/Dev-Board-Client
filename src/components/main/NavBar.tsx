import { Link } from "react-router-dom";
import { useAuthStore } from "../../store";
import { motion as m, AnimatePresence } from "framer-motion";

export function Navbar() {
  const auth = useAuthStore((state) => state.auth);
  console.log(auth);

  return (
    <AnimatePresence>
      <header className=" flex justify-between items-center p-4 bg-primary">
        <m.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-medium"
        >
          <span className="text-white"> Dev</span>
          <span className="text-secondary"> Board</span>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-10"
        >
          <m.div
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link
              to="/auth/signin"
              className="bg-secondary rounded-lg px-4 py-1 font-medium text-white"
            >
              Sign In
              <i className="ri-login-circle-line mx-1"></i>
            </Link>
          </m.div>
        </m.div>
      </header>
    </AnimatePresence>
  );
}
