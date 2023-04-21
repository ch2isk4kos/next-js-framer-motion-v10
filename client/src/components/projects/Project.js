import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "../nav/Icons";

const root = ``;
const imageLink = `w-full cursor-pointer overflow-hidden rounded-lg`;
const image = `w-full h-auto`;
const projectInfo = `flex flex-col items-start justify-between w-1/2 pl-6`;
const h2 = `font-medium text-center text-blue-600 text-2xl`;
const type = `w-full my-2 font-bold text-left text-dark text-2xl`;
const overview = `my-2 font-medium text-dark`;
const links = `flex items-center mt-2`;
const gitHubIcon = "w-12";
const appLink = `ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold`;

const Project = ({ category, description, gitHub, img, title, url }) => {
  return (
    <article className={root}>
      <Link className={imageLink} href={url} target="_blank">
        <Image className={image} src={img} alt={title} />
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
            <p className={appLink}>Visit Website</p>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
