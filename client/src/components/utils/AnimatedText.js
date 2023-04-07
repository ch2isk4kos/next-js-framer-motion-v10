import React from "react";
import { motion } from "framer-motion";

const h1Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const spanVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ className = "", text }) => {
  const textWrapperStyles = `
    w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden
  `;
  const textStyles = `${className}`;
  const spanStyles = `inline-block`;

  return (
    <div className={textWrapperStyles}>
      <motion.h1
        className={textStyles}
        variants={h1Variants}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((char, index) => (
          <motion.span
            className={spanStyles}
            key={`${char}-${index}`}
            variants={spanVariants}
          >
            {char}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
