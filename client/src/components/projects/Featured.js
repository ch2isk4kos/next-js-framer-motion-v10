import React from "react";
import Link from "next/link";
import Image from "next/image";
import framer from "../../../public/images/framer-motion-vector.png";
import { GitHubIcon } from "../nav/Icons";

const root = `
  flex items-center justify-between w-full
  rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
`;
const imageLink = `w-1/2 cursor-pointer overflow-hidden rounded-lg`;
const image = `w-full h-auto`;
const projectInfo = `flex flex-col items-start justify-between w-1/2 pl-6`;
const h2 = `font-medium text-center text-blue-600 text-2xl`;
const category = `w-full my-2 font-bold text-left text-dark text-4xl`;
const description = `my-2 font-medium text-dark`;
const links = `flex items-center mt-2`;
const gitHubIcon = "w-12";
const appLink = `ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold`;

const Featured = ({ data }) => {
  return (
    <article className={root}>
      <Link className={imageLink} href={data.url} target="_blank">
        <Image className={image} src={framer} alt={data.title} />
      </Link>
      <div className={projectInfo}>
        <h2 className={h2}>Featured Project</h2>
        <span className={category}>{data.category}</span>
        <p className={description}>{data.description}</p>
        <div className={links}>
          <Link href={data.gitHub} target="_blank">
            <GitHubIcon className={gitHubIcon} />
          </Link>
          <Link href={data.url} target="_blank">
            <p className={appLink}>Visit Website</p>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Featured;
