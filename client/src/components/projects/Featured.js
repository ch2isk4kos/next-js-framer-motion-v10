import React from "react";
import Link from "next/link";
import Image from "next/image";
import framer from "../../../public/images/framer-motion-vector.png";
import { GitHubIcon } from "../nav/Icons";

const image = `w-full h-auto border-2 border-blue-800`;
const iconStyle = "w-6 mx-2";

const Featured = ({ data }) => {
  return (
    <article>
      <h2>Featured Project</h2>
      <Link href={data.url} target="_blank">
        <Image
          className={image}
          src={framer}
          width="300"
          height="300"
          alt={data.title}
        />
      </Link>
      <div>
        <span>{data.category}</span>
        {/* <Link href={data.url} target="_blank">
          <h2>{data.title}</h2>
        </Link> */}
        <p>{data.description}</p>
        <Link href={data.gitHub} target="_blank">
          <GitHubIcon className={iconStyle} />
        </Link>
      </div>
    </article>
  );
};

export default Featured;
