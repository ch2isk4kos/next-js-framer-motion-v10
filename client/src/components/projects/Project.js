import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ category, gitHub, img, title, url }) => {
  return (
    <article>
      <Link href={url} target="_blank">
        <Image />
      </Link>
    </article>
  );
};

export default Project;
