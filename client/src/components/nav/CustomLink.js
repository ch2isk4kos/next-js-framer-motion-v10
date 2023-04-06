import React from "react";
import Link from "next/link";

const CustomLink = ({ href, title, className = "" }) => {
  const linkStyles = `${className} relative group`;
  const spanStyles =
    "h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300";

  return (
    <Link href={href} className={linkStyles}>
      {title}
      <span className={spanStyles}>&nbsp;</span>
    </Link>
  );
};

export default CustomLink;
