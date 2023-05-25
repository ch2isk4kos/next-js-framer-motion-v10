import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const h2 = `font-medium text-blue-600 text-2xl`;
const image = `w-full h-auto`;
// const imageLink = `w-full inline-block cursor-pointer overflow-hidden rounded-lg`;

const MovingImage = ({ img, title, url }) => {
  return (
    // <Link className={imageLink} href={url} target="_blank">
    <Link href={url} target="_blank">
      {/* <FramerImage
        className={image}
        src={framer}
        alt={title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      /> */}
      <h2 className={h2}>{title}</h2>
      <Image className={image} src={img} alt={title} />
    </Link>
  );
};

export default MovingImage;
