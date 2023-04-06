import React from "react";
import Logo from "@/components/nav/Logo.js";
import CustomLink from "./CustomLink";
import Link from "next/link";
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
  CircularText,
  LinkArrow,
} from "./Icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const headerStyles =
    "w-full px-32 py-8 font-medium flex items-center justify-between";
  const midNavStyles = "";
  const rightNavStyles = "flex items-center justify-center flex-wrap";
  const aStyles = "w-6";
  const hoverEffect = { y: -4 };
  const tapEffect = { scale: 0.9 };

  return (
    <header className={headerStyles}>
      <div>
        <Logo />
      </div>
      <nav className={midNavStyles}>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className={rightNavStyles}>
        <motion.a
          href="https://chriskakos.medium.com/"
          target={"_blank"}
          className={`${aStyles} mx-2`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <h1>M</h1>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/chris-kakos"
          target={"_blank"}
          className={`${aStyles} mx-2`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/ch2isk4kos"
          target={"_blank"}
          className={`${aStyles} mx-2`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <GitHubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com/ch2isk4kos"
          target={"_blank"}
          className={`${aStyles} mx-2`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          className={`${aStyles} mx-2`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <MoonIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          className={`${aStyles} mx-2`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <SunIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          className={`${aStyles} mx-2`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          {/* <MoonIcon /> */}
        </motion.a>
        {/* <motion.a
          href="/"
          target={"_blank"}
          className={``}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <LinkArrow />
        </motion.a> */}
      </nav>
    </header>
  );
};

export default Navbar;
