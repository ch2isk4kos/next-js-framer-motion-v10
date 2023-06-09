import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitHubIcon } from "../nav/Icons";
import framer from "../../../public/images/framer-motion-vector.png";

const FramerImage = motion(Image);

const root = `
  relative flex flex-col items-center justify-center w-full rounded-2xl
  border border-solid border-dark bg-light shadow-2xl p-6
`;
const imageLink = `w-full cursor-pointer overflow-hidden rounded-lg`;
const image = `w-full h-auto`;
const projectInfo = `flex flex-col items-start justify-between w-full mt-4`;
const h2 = `font-medium text-center text-blue-600 text-2xl`;
const type = `w-full my-2 font-bold text-left text-dark text-xl`;
const overview = `my-2 font-medium text-dark`;
const links = `flex items-center w-full mt-2`;
const gitHubIcon = "w-18 h-10";
const appLink = `ml-4 rounded-lg bg-dark text-light p-2 px-4 text-lg font-semibold`;

const Project = ({ category, description, gitHub, img, title, url }) => {
  return (
    <article className={root}>
      <Link className={imageLink} href={url} target="_blank">
        {/* <Image className={image} src={img} alt={title} /> */}
        <FramerImage
          className={image}
          src={framer}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className={projectInfo}>
        <h2 className={h2}>{title}</h2>
        <span className={type}>{category}</span>
        <p className={overview}>{description}</p>
        <div className={links}>
          <Link href={gitHub} target="_blank">
            <GitHubIcon className={gitHubIcon} />
          </Link>
          <Link href={url} target="_blank">
            <p className={appLink}>Website</p>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
