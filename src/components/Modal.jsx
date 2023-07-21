import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariant = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
};
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          className="backdrop"
        >
          <motion.div
            className="modal"
            variants={modalVariant}
            initial="hidden"
            animate="visible"
          >
            <p>Want to make another pizza?</p>
            <Link to="/">
              <motion.button whileHover={{ scale: 1.4, color: "black" }}>
                Start Again!
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
