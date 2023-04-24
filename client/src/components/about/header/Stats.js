import React from "react";
import AnimatedNumbers from "./AnimatedNumbers";

const Stats = () => {
  const statsContainer = `flex flex-col col-span-2 items-end justify-between`;
  const spanWrapper = `flex flex-col items-end justify-center mb-8`;
  const span = `inline-block text-7xl font-bold`;
  const h2 = `text-sm font-medium uppercase text-dark/75`;

  return (
    <div className={statsContainer}>
      <div className={spanWrapper}>
        <span className={span}>
          <AnimatedNumbers value={50} />+
        </span>
        <h2 className={h2}>courses incomplete</h2>
      </div>
      <div className={spanWrapper}>
        <span className={span}>
          <AnimatedNumbers value={40} />+
        </span>
        <h2 className={h2}>projects unfinished</h2>
      </div>
      <div className={spanWrapper}>
        <span className={span}>
          <AnimatedNumbers value={5} />+
        </span>
        <h2 className={h2}>years of confusion</h2>
      </div>
    </div>
  );
};

export default Stats;
