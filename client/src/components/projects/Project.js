import React from "react";
import Image from "next/image";
import Link from "next/link";
import framer from "../../../public/images/framer-motion-vector.png";

const image = ``;

const Project = ({ category, gitHub, img, title, url }) => {
  return (
    <article>
      <Link href={url} target="_blank">
        <Image className={image} src={framer} alt={title} />
      </Link>
    </article>
  );
};

export default Project;
