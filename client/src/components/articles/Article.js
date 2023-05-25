import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import framer from "../../../public/images/framer-motion-vector.png";

const FramerImage = motion(Image);

// const root = `
//   relative flex flex-col items-center justify-center w-full h-auto rounded-2xl
//   border border-solid border-dark bg-light shadow-2xl p-6`;
const root = `
  relative flex justify-between items-center w-full p-4 rounded-xl
  border border-solid border-dark bg-light shadow-2xl first:mt-0`;
const imageLink = `w-full inline-block cursor-pointer overflow-hidden rounded-lg`;
const image = `w-full h-auto`;
const articleInfo = `flex flex-col items-start justify-between w-full mt-4`;
const h2 = `font-medium text-blue-600 text-2xl`;
const preview = `my-2 font-medium text-dark`;
const links = `flex items-center w-full mt-2`;
const articleLink = `rounded-lg bg-dark text-light p-2 px-4 text-lg font-semibold`;
const date = `text-primary font-semibold pl-4`;

// const root = ``;
// const imageLink = ``;
// const image = ``;
// const articleInfo = ``;
// const h2 = ``;
// const preview = ``;
// const links = ``;
// const articleLink = ``;

const Article = ({ img, medium, summary, title, url }) => {
  return (
    <article className={root}>
      <div className={articleInfo}>
        <h2 className={h2}>{title}</h2>
        <p className={preview}>{summary}</p>
        {/* <div className={links}>
          <Link href={url} target="_blank">
            <p className={articleLink}>Read More</p>
          </Link>
        </div> */}
      </div>
      <span className={date}>date</span>
    </article>
  );
};

export default Article;
