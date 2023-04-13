import React from "react";

const li = `flex flex-col items-center justify-between w-[60%] mx-auto my-8 first:mt-0 last:mb-0`;
const h3 = `font-bold text-lg mb-32 w-full`;

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
    <li className={li}>
      <h3>
        <span className={h3}>{title}</span>&nbsp;
        <a href={companyURL} target={"_blank"}>
          @{company}
        </a>
      </h3>
      <span>
        <p>
          {time} | {location}
        </p>
      </span>
      <span>
        <br />
        <p>{overview}</p>
      </span>
    </li>
  );
};

export default Position;
