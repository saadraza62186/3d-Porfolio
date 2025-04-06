import React from "react";
import { motion } from "framer-motion"; // ✅ Correct import

const Test = () => {
  const shapeVariants = {
    initialRect: { x: -100, opacity: 0 },
    animateRect: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    initialCirc: { y: -100, opacity: 0 },
    animateCirc: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };

  const listVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  const itemVariants = {
    initial: { x: -100, y: -100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "40px",
      }}
    >
      {/* Rectangle */}
      <motion.div
        variants={shapeVariants}
        initial="initialRect"
        animate="animateRect"
        style={{ width: 150, height: 150, background: "red" }}
      ></motion.div>

      {/* Circle */}
      <motion.div
        variants={shapeVariants}
        initial="initialCirc"
        animate="animateCirc"
        style={{
          width: 150,
          height: 150,
          background: "green",
          borderRadius: "100%",
        }}
      ></motion.div>

      {/* Animated List */}
      <motion.ul
        variants={listVariants}
        initial="initial"
        animate="animate"
        style={{ listStyle: "none", padding: 0 }}
      >
        <motion.li variants={itemVariants}>Javascript</motion.li>
        <motion.li variants={itemVariants}>React</motion.li>
        <motion.li variants={itemVariants}>Next.js</motion.li>
      </motion.ul>
    </section>
  );
};

export default Test;
