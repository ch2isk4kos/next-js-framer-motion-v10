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
  w-full mb-2 font-bold text-5xl uppercase
`;
const wonka = `absolute right-40 text-lg font-medium`;
const grid = `grid grid-cols-12 gap-24 mt-14`;
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
          {/* <AnimatedText className={text} text="Projects" /> */}
          <AnimatedText className={text} text="''We Are the Music Makers," />
          <AnimatedText
            className={text}
            text=" We Are the Dreamers of Dreams.''"
          />
          <span className={wonka}>
            <em>- William Wonka</em>
          </span>
          <div className={grid}>
            <div className={featureGrid}>
              <Featured data={featured} />
            </div>
            {projects?.map((project) => (
              <div className={projectGrid} key={project.id}>
                <Project
                  category={project.category}
                  description={project.description}
                  gitHub={project.gitHub}
                  img={project.img}
                  title={project.title}
                  url={project.url}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
