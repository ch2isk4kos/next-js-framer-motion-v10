import React from "react";
import Head from "next/head";
import Layout from "@/components/utils/Layout";
import AnimatedText from "@/components/utils/AnimatedText";
import Featured from "@/components/projects/Featured";
import Project from "@/components/projects/Project";
import { featured, projects } from "@/components/projects/data";

const layout = `pt-16`;
const main = `flex flex-col items-center justify-center w-full mb-16`;
const text = `
  flex flex-column items-center justify-center
  w-full mb-32 font-medium text-7xl uppercase
`;
const grid = `grid grid-cols-12 gap-24`;
const featureGrid = `col-span-12`;
const projectGrid = `col-span-6`;

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
          <div className={grid}>
            <div className={featureGrid}>
              <Featured data={featured} />
            </div>
            {projects?.map((project) => (
              <div className={projectGrid}>
                <Project title={project.title} url={project.url} />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
