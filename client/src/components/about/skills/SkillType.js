import React from "react";
import { motion } from "framer-motion";

const skill = `
    absolute flex items-center justify-center py-3 px-6
    rounded-full bg-dark font-semibold text-light shadow-dark
    cursor-pointer
`;

const SkillType = ({ name, x, y }) => {
  return (
    <motion.div
      className={skill}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default SkillType;
