import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button whileHover={{scale:1.1 , boxShadow: '0px 0px 8px rgb(255 , 255 ,255)'}} >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;