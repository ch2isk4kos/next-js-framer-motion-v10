import React from "react";
import { CircularText } from "../nav/Icons";

const Thumbnail = () => {
  const thumbnail = `
    fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden
  `;
  const circleTextWrapper = `w-48 h-auto flex items-center justify-center relative`;
  const circleText = `fill-dark `;

  return (
    <div className={thumbnail}>
      <div className={circleTextWrapper}>
        <CircularText className={circleText} />
      </div>
    </div>
  );
};

export default Thumbnail;
