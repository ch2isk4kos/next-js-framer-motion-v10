import React from "react";
import Head from "next/head";
import Layout from "@/components/utils/Layout";
import Article from "@/components/articles/Article";
import AnimatedText from "@/components/utils/AnimatedText";
import Featured from "@/components/articles/Featured";
import { featured, articles } from "@/components/articles/articles";

const layout = `pt-16`;
const main = `flex flex-col items-center justify-center w-full mb-16 overflow-hidden`;
const text = `
  flex flex-column items-center justify-center
  w-full mb-2 font-bold text-6xl uppercase
`;
const doc = `absolute right-60 text-lg font-medium`;
const grid = `grid grid-cols-12 gap-24 mt-14`;
const featureGrid = `col-span-12`;
const articleGrid = `col-span-6`;

const ArticlesPage = () => {
  return (
    <>
      <Head>
        <title>Chris Kakos | Articles</title>
        <meta
          name="description"
          content="full stack software engineer articles"
        />
      </Head>
      <main className={main}>
        <Layout className={layout}>
          <AnimatedText className={text} text="''Where We're Going," />
          <AnimatedText className={text} text=" We Don't Need Roads.''" />
          <span className={doc}>
            <em>- Dr. Emmett Brown</em>
          </span>
          <div className={grid}>
            <div className={featureGrid}>
              <Featured data={featured} />
            </div>
            {articles?.map((article) => (
              <div className={articleGrid} key={article.id}>
                <Article
                  img={article.img}
                  summary={article.summary}
                  title={article.title}
                  url={article.url}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ArticlesPage;
