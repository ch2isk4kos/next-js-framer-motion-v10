import React from "react";
import Head from "next/head";
import Layout from "@/components/utils/Layout";
import AnimatedText from "@/components/utils/AnimatedText";
import Header from "@/components/about/header";

const layout = `pt-16`;
const text = `flex flex-column w-full items-center justify-center font-medium text-7xl`;

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Chris Kakos | About</title>
        <meta name="description" content="full stack software engineer" />
      </Head>
      <main>
        <Layout className={layout}>
          <AnimatedText className={text} text="About" />
          <Header />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;
