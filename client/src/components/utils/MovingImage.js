import React from "react";
import Link from "next/link";
import Image from "next/image";

const FramerImage = motion(Image);

const h2 = `font-medium text-blue-600 text-2xl`;

const MovingImage = ({ image, link, title }) => {
  return (
    <Link className={imageLink} href={link} target="_blank">
      {/* <FramerImage
        className={image}
        src={framer}
        alt={title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      /> */}
      <h2 className={h2}>{title}</h2>
    </Link>
  );
};

export default MovingImage;
