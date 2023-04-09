import React from "react";
// import Link from "next/link";
import { CircularText } from "../nav/Icons";

const Thumbnail = () => {
  const thumbnail = `
    fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden
  `;
  const circleTextWrapper = `relative w-48 h-auto flex items-center justify-center`;
  // const circleTextWrapper = `relative w-48 h-auto flex items-center justify-center animate-spin-slow`;
  const circleText = `fill-dark`;
  // const link = `
  //   asbolute flex items-center justify-center
  //   right-2 top-1/2 -translate-x-1/2 -translate-y-1/2
  // `;

  return (
    <div className={thumbnail}>
      <div className={circleTextWrapper}>
        <CircularText className={circleText} />
        {/* <Link className={link} href={`mailto:test@gmail.com`}>
          Hire Me
        </Link> */}
      </div>
    </div>
  );
};

export default Thumbnail;
