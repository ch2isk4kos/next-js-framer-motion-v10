import React from "react";
import Link from "next/link";
import Image from "next/image";
import MovingImage from "../utils/MovingImage";
import { motion } from "framer-motion";
import framer from "../../../public/images/framer-motion-vector.png";

const root = `
  relative flex justify-between items-center w-full p-4 rounded-xl
  border border-solid border-dark bg-light shadow-2xl first:mt-0`;
const articleInfo = `flex flex-col items-start justify-between w-full mt-4`;
const h2 = `font-medium text-blue-600 text-2xl`;
const preview = `my-2 font-medium text-dark`;
const links = `flex items-center w-full mt-2`;
const articleLink = `rounded-lg bg-dark text-light p-2 px-4 text-lg font-semibold`;
const dateFont = `text-primary font-semibold pl-4`;

const Article = ({ date, img, medium, summary, title, url }) => {
  return (
    <motion.article
      className={root}
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      {/* <MovingImage img={img} url={url} title={title} /> */}
      <MovingImage img={framer} url={url} title={title} />
      <span className={dateFont}>date</span>
    </motion.article>
  );
};

export default Article;
