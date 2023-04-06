import React from "react";
import Logo from "@/components/nav/Logo.js";
import CustomLink from "./CustomLink";
import Link from "next/link";

const Navbar = () => {
  const headerStyles =
    "w-full px-32 py-8 font-medium flex items-center justify-between";
  const midNavStyles = "";
  const rightNavStyles = "";

  return (
    <header className={headerStyles}>
      <div>
        <Logo />
      </div>
      <nav className={midNavStyles}>
        <CustomLink href="/about" title="About" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className={rightNavStyles}>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
