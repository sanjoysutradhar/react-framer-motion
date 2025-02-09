import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
      className="w-50 h-50 border rounded-sm bg-pink-300 m-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
    >
      {text}
    </motion.div>
  );
};
const ScrollReveal = () => {
  const greetings = [
    "Hello",
    "Holla",
    "Welcome",
    "Namste",
    "Come In",
    "greetting",
    "Good Morning",
  ];
  return (
    <div>
      {greetings.map((greeting, index) => (
        <Box key={index} text={greeting} />
      ))}
    </div>
  );
};

export default ScrollReveal;
