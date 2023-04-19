import React from "react";
import { motion, useScroll } from "framer-motion";

const circleWrapper = `absolute left-0 stroke-dark`;
const svg = `-rotate-90`;
const circle = `stroke-blue-800 stroke-1 fill-none`;
const circle2 = `stroke-[5px] fill-light`;
const circle3 = `animate-pulse stroke-1 fill-blue-600`;

const BulletPoint = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className={circleWrapper}>
      <svg className={svg} width="75" height="75" viewBox="0 0 100 100">
        <circle className={circle} cx="75" cy="50" r="20" />
        <motion.circle
          className={circle2}
          cx="75"
          cy="50"
          r="20"
          style={{ pathLength: scrollYProgress }}
        />
        <circle className={circle3} cx="75" cy="50" r="10" />
      </svg>
    </figure>
  );
};

export default BulletPoint;
