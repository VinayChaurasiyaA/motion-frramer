import React from "react";
import { Link } from "react-router-dom";
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
      delay: 0.5,
      stiffness: 120,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="toppings container"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.2, originX: 0, color: "yellow" }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.toppings.length > 0 && (
        <Link to="/order">
          <motion.button
            initial={{ x: "150%" }}
            animate={{ x: "30%" }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255 , 255 ,255)",
            }}
          >
            Order
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
};

export default Toppings;
