import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
  "Gathering U.S. immigration updates...",
  "Exploring visa opportunities...",
  "Preparing American job insights...",
  "Discovering U.S. education pathways...",
  "Just a moment—setting up your future!",
];

const flagSvg = (
  <motion.img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
    alt="U.S. Flag"
    className="w-24 h-16 object-cover rounded-md"
    initial={{ rotate: -3, scale: 0.9 }}
    animate={{
      rotate: [-3, 3, -3],
      scale: [0.9, 1, 0.9],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Loading = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[400px] bg-blue-700 flex flex-col items-center justify-center text-center px-6 py-16 text-white">
      {/* U.S. Flag Animation */}
      <motion.div className="mb-6">{flagSvg}</motion.div>

      {/* Rotating Loading Text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={textIndex}
          className="text-lg sm:text-xl font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {loadingTexts[textIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default Loading;