import React from "react";
import Logo from "@/components/nav/Logo.js";
import CustomLink from "./CustomLink";
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import useDarkMode from "@/hooks/useDarkMode";
import { motion } from "framer-motion";

const root = `w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light`;
const customLinkStyles = "";
const iconStyles = "flex items-center justify-center flex-wrap";
const aStyles = "w-6 mx-2";
const darkModeToggle = `flex items-center justify-center ml-1 p-1 rounded-full`;
const darkModeStyle = `fill-dark`;
const hoverEffect = { y: -4 };
const tapEffect = { scale: 0.9 };

const Navbar = () => {
  const [mode, setMode] = useDarkMode();
  return (
    <header className={root}>
      <div>
        <Logo />
      </div>
      <nav className={customLinkStyles}>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
        <CustomLink href="/about" title="About" className="ml-4" />
      </nav>
      <nav className={iconStyles}>
        {/* Medium */}
        <motion.a
          href="https://chriskakos.medium.com/"
          target={"_blank"}
          className={aStyles}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <h1>M</h1>
        </motion.a>
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/chris-kakos"
          target={"_blank"}
          className={`${aStyles}`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <LinkedInIcon />
        </motion.a>
        {/* GitHub */}
        <motion.a
          href="https://github.com/ch2isk4kos"
          target={"_blank"}
          className={`${aStyles}`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <GitHubIcon />
        </motion.a>
        {/* Twitter */}
        <motion.a
          href="https://twitter.com/ch2isk4kos"
          target={"_blank"}
          className={`${aStyles}`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <TwitterIcon />
        </motion.a>
        {/* Sun? */}
        {/* <motion.a
          href="/"
          target={"_blank"}
          className={`${aStyles}`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <MoonIcon />
        </motion.a> */}
        {/* Moon? */}
        {/* <motion.a
          href="/"
          target={"_blank"}
          className={`${aStyles}`}
          whileHover={hoverEffect}
          whileTap={tapEffect}
        >
          <SunIcon />
        </motion.a> */}
        {/* Dark Mode Toggle */}
        <button
          className={`
            ${darkModeToggle} 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className={darkModeStyle} />
          ) : (
            <MoonIcon className={darkModeStyle} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
