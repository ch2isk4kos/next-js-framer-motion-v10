import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/utils/AnimatedText";

const About = () => {
  return (
    <>
      <Head>
        <title>Chris Kakos | About</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <AnimatedText text="About" />
      </main>
    </>
  );
};

export default About;
