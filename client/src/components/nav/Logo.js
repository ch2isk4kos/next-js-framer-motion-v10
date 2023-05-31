import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  const logoStyles = "flex mt-2";
  // const logoStyles = "absolute left-[50%] top-2 translate-x-[-50%] flex mt-2";
  const motionLinkStyle =
    "flex items-center justify-center w-16 h-16 bg-dark text-light font-bold rounded border border-solid border-transparent dark:border-light";
  // "rounded-full w-16 h-16 flex items-center justify-center bg-dark text-light text-xl";

  return (
    <div className={logoStyles}>
      <MotionLink
        className={motionLinkStyle}
        href="/"
        whileHover={{
          // scale: 1.5,
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        LOGO
      </MotionLink>
    </div>
  );
};

export default Logo;
