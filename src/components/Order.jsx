import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay: 0.5,
      mass: 0.4,
      damping : 8,// when to stop the spring motion
      stiffness: 120,
      when: "beforeChildren", // this is known as orchestration,
      staggerChildren : 2, // it will make the children variants all to be delayed with 2s and if they have more children element then another 2s

    },
  },
};
const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}; // if the parent div is already a motion div and we apply the child div also as the motion then we have a flexibility that we only provide variants and other inital and animation will be taken care if there is same name
const Order = ({ pizza }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="container order">
      <h2>Thank you for your order :) </h2>
      <motion.p variants={childrenVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping, i) => {
          // console.log((pizza?.toppings.length - 1 < i ) ? "," : "");
          console.log(pizza.toppings.length - 1 > i ? "," : "");
          return (
            <span key={topping}>
              {topping}
              {pizza?.toppings.length - 1 > i ? "&" : ""}{" "}
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Order;
