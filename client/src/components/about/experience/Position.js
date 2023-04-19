import React from "react";

// const root = `flex flex-col items-center justify-between w-[60%] mx-auto my-8 first:mt-0 last:mb-0`;
const root = `flex flex-col mx-auto my-8 first:mt-0 last:mb-0`;
const h3 = `w-full text-lg font-bold uppercase`;
const a = `text-blue-600`;
const duration = `w-full font-medium text-dark/75 uppercase`;
const summary = `font-medium w-full`;

const Position = ({
  company,
  companyURL,
  duties,
  location,
  title,
  time,
  overview,
}) => {
  return (
    <li className={root}>
      <h3 className={h3}>
        <span>{title}</span>&nbsp; @
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
      <span>
        <br />
        <ul>
          {duties?.map((duty) => (
            <>
              <li>{duty.p1}</li>
              <li>{duty.p2}</li>
              <li>{duty.p3}</li>
              <li>{duty.p4}</li>
            </>
          ))}
        </ul>
      </span>
    </li>
  );
};

export default Position;
