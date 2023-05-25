import React from "react";
import Link from "next/link";
import Image from "next/image";

const FramerImage = motion(Image);

const MovingImage = ({ image, link, title }) => {
  return (
    <Link className={imageLink} href={url} target="_blank">
      {/* <FramerImage
        className={image}
        src={framer}
        alt={title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      /> */}
    </Link>
  );
};

export default MovingImage;
