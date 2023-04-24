import React from "react";
import Link from "next/link";
import Image from "next/image";
import framer from "../../../public/images/framer-motion-vector.png";

const root = ``;
const imageLink = ``;
const image = ``;
const articleInfo = ``;
const h2 = ``;
const preview = ``;
const links = ``;
const mediumIcon = ``;
const articleLink = ``;

const Article = ({ description, img, medium, title, url }) => {
  return (
    <article className={root}>
      {/* <Link className={imageLink} href={url} target="_blank">
        <Image className={image} src={framer} alt={title} />
      </Link> */}
      <div className={articleInfo}>
        <h2 className={h2}>{title}</h2>
        <p className={preview}>{description}</p>
        <div className={links}>
          {/* <Link href={medium} target="_blank">
            <p>Medium</p>
          </Link> */}
          {/* <Link href={url} target="_blank">
            <p className={articleLink}>Read More</p>
          </Link> */}
        </div>
      </div>
    </article>
  );
};

export default Article;
