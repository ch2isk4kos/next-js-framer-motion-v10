import React from "react";
import Head from "next/head";
import Layout from "@/components/utils/Layout";
import AnimatedText from "@/components/utils/AnimatedText";
import Header from "@/components/about/header";
import Skills from "@/components/about/skills";
import Experience from "@/components/about/experience";

const layout = `pt-16`;
const text = `flex flex-column w-full items-center justify-center mb-32 font-medium text-7xl uppercase`;

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Chris Kakos | About</title>
        <meta name="description" content="full stack software engineer" />
      </Head>
      <main>
        <Layout className={layout}>
          {/* <AnimatedText className={text} text="About" /> */}
          <Header />
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;
