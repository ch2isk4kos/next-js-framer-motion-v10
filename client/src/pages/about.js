import React from "react";
import Head from "next/head";
import Layout from "@/components/utils/Layout";
import AnimatedText from "@/components/utils/AnimatedText";
import Header from "@/components/about/header";
import Skills from "@/components/about/skills";
import Experience from "@/components/about/experience";
import Education from "@/components/about/education";

const layout = `pt-16`;
const quote = `mt-8`;
const text = `
  flex flex-column items-center justify-center
  w-full mb-2 font-bold text-7xl uppercase
`;
const austin = `absolute right-60 text-lg font-medium`;

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Chris Kakos | About</title>
        <meta name="description" content="full stack software engineer" />
      </Head>
      <main>
        <Layout className={layout}>
          <div className={quote}>
            <AnimatedText className={text} text="''Allow Myself to" />
            <AnimatedText className={text} text="Introduce...Myself.''" />
            <span className={austin}>
              <em>- Austin Powers</em>
            </span>
          </div>
          <Header />
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;
