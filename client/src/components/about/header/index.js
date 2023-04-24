import React from "react";
import Image from "next/image";
import Biography from "@/components/about/header/Biography";
import Stats from "./Stats";
import globe from "../../../../public/images/satelite-globe-1-vector.png";

const grid = `grid grid-cols-8 gap-16 w-full mt-36`;
const column1 = `flex flex-col col-span-3 items-start justify-around`;
const column2 = `relative col-span-3 h-max my-8 rounded-2xl border-2 border-solid border-dark`;
const column3 = `flex flex-col col-span-2 items-end justify-around`;
const image = `w-full h-auto rounded-3xl`;

const Header = () => {
  return (
    <div className={grid}>
      <div className={column1}>
        <Biography />
      </div>
      <div className={column2}>
        <Image
          className={image}
          src={globe}
          alt={"Chris Kakos"}
          width={500}
          height={500}
        />
      </div>
      <div className={column3}>
        <Stats />
      </div>
    </div>
  );
};

export default Header;
