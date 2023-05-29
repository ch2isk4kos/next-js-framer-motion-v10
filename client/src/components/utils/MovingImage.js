import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

// const FramerImage = motion(Image);

const h2 = `font-medium text-blue-600 text-2xl`;
const image = `absolute w-96 h-auto hidden rounded-lg`;

const MovingImage = ({ img, title, url }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  return (
    <Link href={url} target="_blank">
      <h2 className={h2}>{title}</h2>
      <Image className={image} src={img} alt={title} />
    </Link>
  );
};

export default MovingImage;
