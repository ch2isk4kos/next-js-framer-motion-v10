import React, { useRef } from "react";
import School from "./School";
import { schools } from "./schools";
import { motion, useScroll } from "framer-motion";

const root = `my-64 border-2 border-blue-800`;
const h2 = `w-full mb-32 font-bold text-8xl`;
const ulWrapper = `relative w-[75%]`;
const line = `absolute left-9 top-0 w-[4px] h-full bg-dark origin-top`;
const ul = `flex flex-col items-start justify-between w-full ml-4 mb-36`;

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className={root}>
      <h2 className={h2}>Education</h2>
      <div className={ulWrapper}>
        <motion.div
          ref={ref}
          className={line}
          style={{ scaleY: scrollYProgress }}
        />
        <ul className={ul}>
          {schools?.map((school) => (
            <School
              name={school.name}
              focus={school.focus}
              schoolURL={school.schoolURL}
              location={school.location}
              time={school.time}
              overview={school.overview}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
