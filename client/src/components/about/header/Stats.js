import React from "react";

const Stats = () => {
  const statsContainer = `flex flex-col col-span-2 items-end justify-between`;
  const span = `inline-block text-7xl font-bold`;
  const h2 = `text-md font-medium uppercase text-dark/75`;
  const courses = `flex flex-col items-end justify-center mb-8`;
  const projects = `flex flex-col items-end justify-center mb-8`;
  const experience = `flex flex-col items-end justify-center mb-8`;

  return (
    <div className={statsContainer}>
      <div className={courses}>
        <span className={span}>50+</span>
        <h2 className={h2}>courses uncompleted</h2>
      </div>
      <div className={projects}>
        <span className={span}>40+</span>
        <h2 className={h2}>projects unfinished</h2>
      </div>
      <div className={experience}>
        <span className={span}>5+</span>
        <h2 className={h2}>years of confusion</h2>
      </div>
    </div>
  );
};

export default Stats;
