import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/nav/Icons";
import AnimatedText from "@/components/utils/AnimatedText";
import ProfileImage from "../../../public/images/mobile-dev-1-vector.png";

const Header = () => {
  const root = `flex items-center justify-between w-[100%] min-h-screen dark:text-light`;
  const imgWrapper = `w-1/2 flex flex-col items-center self-center`;
  const img = `w-full h-auto`;
  const headingWrapper = `w-1/2`;
  const heading = `inline-block w-full text-dark capitalize text-left dark:text-light`;
  const headingSubtext = `my-4 text-base font-medium`;
  const buttonWrapper = `flex items-center self-start mt-2 dark:text-light`;
  const button = `
    flex items-center text-light p-2.5 px-6 mx-2
    text-lg font-semibold bg-dark
    border-2 border-solid border-transparent rounded-lg 
    hover:border-dark hover:bg-light hover:text-dark dark:border-light
  `;

  return (
    <div className={root}>
      {/* Header Image */}
      <div className={imgWrapper}>
        <Image src={ProfileImage} alt="Chris Kakos" className={img} />
      </div>
      {/* Header Heading */}
      <div className={headingWrapper}>
        <AnimatedText
          className={`${heading} font-medium text-7xl`}
          text={"Chris Kakos"}
        />
        <AnimatedText
          className={`${heading} font-extralight text-5xl`}
          text={"Full Stack Engineer"}
        />
        <p className={headingSubtext}>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah
        </p>
        <div className={`${buttonWrapper}`}>
          <Link
            className={button}
            href={`/chris-kakos-resume-2023.pdf`}
            target={"_blank"}
            download={true}
          >
            Resume
            <LinkArrow className={"w-6 ml-1"} />
          </Link>
          <Link
            className={button}
            href={`mailto:ch2isk4kos@gmail.com`}
            target={"_blank"}
          >
            Send Me An Email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
