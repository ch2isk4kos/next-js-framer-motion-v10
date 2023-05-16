import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import framer from "../../../public/images/framer-motion-vector.png";

const FramerImage = motion(Image);

const root = `
  relative flex flex-col items-center justify-center w-full h-auto rounded-2xl
  border border-solid border-dark bg-light shadow-2xl p-6`;
const imageLink = `w-full inline-block cursor-pointer overflow-hidden rounded-lg`;
const image = `w-full h-auto`;
const latestInfo = `flex flex-col items-start justify-between w-full mt-4`;
const h2 = `font-medium text-blue-600 text-2xl`;
const preview = `my-2 font-medium text-dark`;
const links = `flex items-center w-full mt-2`;
const latestLink = `rounded-lg bg-dark text-light p-2 px-4 text-lg font-semibold`;

const Latest = ({ img, medium, summary, title, url }) => {
  return (
    <article className={root}>
      <Link className={imageLink} href={url} target="_blank">
        <FramerImage
          className={image}
          src={framer}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className={latestInfo}>
        <h2 className={h2}>{title}</h2>
        <p className={preview}>{summary}</p>
        <div className={links}>
          <Link href={url} target="_blank">
            <p className={latestLink}>Read More</p>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Latest;
