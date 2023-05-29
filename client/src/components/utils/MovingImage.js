import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const h2 = `font-medium text-blue-600 text-2xl`;
const image = `absolute w-96 h-auto hidden rounded-lg z-10`;

const MovingImage = ({ img, title, url }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleOnMouseMove = (e) => {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  };

  const handleOnMouseLeave = (e) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={url}
      target="_blank"
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}
    >
      <h2 className={h2}>{title}</h2>
      <FramerImage className={image} src={img} alt={title} ref={imgRef} />
    </Link>
  );
};

export default MovingImage;
