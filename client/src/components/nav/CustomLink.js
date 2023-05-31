import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ className = "", href, title, target = false }) => {
  const router = useRouter();

  const linkStyles = `relative group ${className}`;
  const spanStyles = `
    h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300
    ${router.asPath === href ? "w-full" : "w-0"}
    dark:bg-light
  `;

  return target ? (
    <Link className={linkStyles} href={href} target={"_blank"}>
      {title}
      <span className={spanStyles}>&nbsp;</span>
    </Link>
  ) : (
    <Link className={linkStyles} href={href}>
      {title}
      <span className={spanStyles}>&nbsp;</span>
    </Link>
  );
};

export default CustomLink;
