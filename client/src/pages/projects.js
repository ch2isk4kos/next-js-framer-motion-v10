import React from "react";
import Head from "next/head";
import Layout from "@/components/utils/Layout";
import AnimatedText from "@/components/utils/AnimatedText";

const layout = `pt-16`;
const main = `flex flex-col items-center justify-center w-full mb-16`;
const text = `
  flex flex-column items-center justify-center
  w-full mb-32 font-medium text-7xl uppercase
`;

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Chris Kakos | Projects</title>
        <meta
          name="description"
          content="full stack software engineer projects"
        />
      </Head>
      <main className={main}>
        <Layout className={layout}>
          <AnimatedText className={text} text="Projects" />
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
