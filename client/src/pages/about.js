import React from "react";
import Head from "next/head";
import Layout from "@/components/utils/Layout";
import AnimatedText from "@/components/utils/AnimatedText";

const About = () => {
  const layout = `pt-16`;
  const text = `flex flex-column w-full  items-center justify-center font-medium text-7xl`;
  const grid = `grid grid-cols-8 gap-16 w-full`;
  const column = `flex flex-col col-span-3 items-start`;
  const h2 = `mb-4 text-lg font-bold uppercase text-dark/75`;
  const pg = `py-2 font-medium`;

  const paragraphs = [
    {
      id: "0",
      text: "blah blah blah blah. blah blah blah blah. blah blah blah blah. blah blah blah blah.",
    },
    {
      id: "1",
      text: "blah blah blah blah. blah blah blah blah. blah blah blah blah. blah blah blah blah.",
    },
    {
      id: "2",
      text: "blah blah blah blah. blah blah blah blah. blah blah blah blah. blah blah blah blah.",
    },
    {
      id: "3",
      text: "blah blah blah blah. blah blah blah blah. blah blah blah blah. blah blah blah blah.",
    },
  ];

  return (
    <>
      <Head>
        <title>Chris Kakos | About</title>
        <meta name="description" content="full stack software engineer" />
      </Head>
      <main>
        <Layout className={layout}>
          <AnimatedText className={text} text="About" />
          <div className={grid}>
            <div className={column}>
              <h2 className={h2}>Biography </h2>
              {paragraphs.map((paragraph) => (
                <>
                  <p className={pg} key={paragraph.id}>
                    {paragraph.text}
                  </p>
                </>
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
