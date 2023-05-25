import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// const FramerImage = motion(Image);

const h2 = `font-medium text-blue-600 text-2xl`;
const image = `absolute w-96 h-auto hidden rounded-lg`;
// const imageLink = `w-full inline-block cursor-pointer overflow-hidden rounded-lg`;

const MovingImage = ({ img, title, url }) => {
  return (
    <Link href={url} target="_blank">
      <h2 className={h2}>{title}</h2>
      <Image className={image} src={img} alt={title} />
    </Link>
  );
};

export default MovingImage;
