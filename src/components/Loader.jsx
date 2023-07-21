import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  animate: {
    x: [-20, 20, -20], // Keyframes for x-axis movement
    y: [0, -20, 0], // Keyframes for y-axis movement
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5, // Adjust the duration for x-axis bounce
        ease: "easeInOut",
        // yoyo: Infinity, // This will make the animation smoothly alternate back and forth.
      },
      y: {
        repeat: Infinity,
        duration: 0.25, // Adjust the duration for y-axis bounce
        ease: "easeInOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="laoder"
      variants={animationVariants}
      animate="animate"
    ></motion.div>
  );
};

export default Loader;
