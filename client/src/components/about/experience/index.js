import React, { useRef } from "react";
import Position from "./Position";
import { positions } from "./positions";
import { motion, useScroll } from "framer-motion";

const experience = `my-64`;
const h2 = `font-bold text-8xl mb-32 w-full`;
// const ulWrapper = `relative w-[75%] mx-auto`;
const ulWrapper = `relative w-[75%]`;
const line = `absolute top-0 w-[4px] h-full bg-dark origin-top`;
const ul = `flex flex-col items-start justify-between w-full ml-4`;

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  return (
    <div className={experience}>
      <h2 className={h2}>Experience</h2>
      <div className={ulWrapper}>
        <div className={line} />
        <ul className={ul}>
          {positions?.map((position) => (
            <Position
              title={position.title}
              company={position.company}
              companyURL={position.companyURL}
              location={position.location}
              time={position.time}
              overview={position.overview}
              responsibilities={position.responsibilities}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
