import React from "react";
import Link from "next/link";
import Image from "next/image";
import framer from "../../../public/images/framer-motion-vector.png";
// import { GitHubIcon } from "../nav/Icons";

const root = `
  flex items-center justify-between w-full
  rounded-3xl border border-solid border-dark bg-light shadow-2xl mt-8 p-12
`;
const imageLink = `w-1/2 cursor-pointer overflow-hidden rounded-lg`;
const image = `w-full h-auto`;
const articleInfo = `flex flex-col items-start justify-between w-1/2 pl-6`;
const title = `w-full my-2 font-bold text-left text-dark text-4xl`;
const h2 = `font-medium text-center text-blue-600 text-2xl`;
const summary = `my-2 font-medium text-dark`;
const links = `flex items-center mt-2`;
const articleLink = `rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold`;

const Featured = ({ data }) => {
  return (
    <article className={root}>
      <Link className={imageLink} href={data.url} target="_blank">
        <Image className={image} src={framer} alt={data.title} />
      </Link>
      <div className={articleInfo}>
        <h2 className={h2}>Featured Article</h2>
        <span className={title}>{data.title}</span>
        <p className={summary}>{data.summary}</p>
        <div className={links}>
          <Link href={data.url} target="_blank">
            <p className={articleLink}>Read Article</p>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Featured;
