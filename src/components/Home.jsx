import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    // scale:[1,1.3,1,1.3,1,1.3,1,1.3,1], // this are called as keyframes
    boxShadow: "0px 0px 8px rgb(255 , 255 ,255)",
    transition:{
      duration : 0.5,
      repeat:Infinity,
    }
  },
};
const Home = () => {
  return (
    <div className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
