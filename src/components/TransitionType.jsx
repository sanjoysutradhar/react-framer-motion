import { motion } from "framer-motion";
const TransitionType = () => {
  // https://motion.dev/docs/react-transitions
  return (
    <>
      {/* // this is tween type animation,default */}
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="text-center mt-5"
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation.We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className="text-center mt-5"
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation.We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.8, duration: 2 }}
        className="text-center mt-5"
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation.We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>
    </>
  );
};
export default TransitionType;
