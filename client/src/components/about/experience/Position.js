import React, { useRef } from "react";
import BulletPoint from "../BulletPoint";
import { motion } from "framer-motion";

const root = `flex flex-col items-center justify-between w-[60%] mx-auto my-8 first:mt-0 last:mb-20`;
// const root = `flex flex-col items-center justify-between w-full mx-10 my-8 first:mt-0 last:mb-0`;
const h3 = `w-full text-lg font-bold uppercase`;
const a = `text-blue-600`;
const duration = `w-full font-medium text-dark/75 uppercase`;
const summary = `w-full font-medium`;

const Position = ({
  company,
  companyURL,
  responsibilities,
  location,
  title,
  time,
  overview,
}) => {
  const ref = useRef(null);
  return (
    <li className={root} ref={ref}>
      <BulletPoint reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className={h3}>
          {/* <span>{title}</span>&nbsp; @ */}
          <span>{title}</span>
          <br /> @
          <a className={a} href={companyURL} target={"_blank"}>
            {company}
          </a>
        </h3>
        <p className={duration}>
          {time} | {location}
        </p>
        <span className={summary}>
          <br />
          <p>{overview}</p>
        </span>
        {/* <span>
        <br />
        <ul>
          {responsibilities?.map((responsibility) => (
            <div>
              <li>{responsibility.p1}</li>
              <li>{responsibility.p2}</li>
              <li>{responsibility.p3}</li>
              <li>{responsibility.p4}</li>
            </div>
          ))}
        </ul>
      </span> */}
      </motion.div>
    </li>
  );
};

export default Position;
