import React from "react";
import Head from "next/head";
import Layout from "@/components/utils/Layout";
import Article from "@/components/articles/Article";
import AnimatedText from "@/components/utils/AnimatedText";
import Featured from "@/components/articles/Featured";
import Latest from "@/components/articles/Latest";
import { featured, latest, articles } from "@/components/articles/articles";

const layout = `pt-16`;
const main = `flex flex-col items-center justify-center w-full overflow-hidden`;
const text = `
  flex flex-column items-center justify-center
  w-full mb-2 font-bold text-6xl uppercase
`;
const docQuote = `absolute right-60 text-lg font-medium`;
const gridContainer = `mt-24`;
const grid = `grid grid-cols-12 gap-10`;
const featureGrid = `col-span-12`;
const latestGrid = `col-span-4`;
const articleGrid = `col-span-12`;

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
          <span className={docQuote}>
            <em>- Dr. Emmett Brown</em>
          </span>
          <div className={gridContainer}>
            <div className={grid}>
              <div className={featureGrid}>
                <Featured data={featured} />
              </div>
              {latest?.map((article) => (
                <div className={latestGrid} key={latest.id}>
                  <Latest
                    img={article.img}
                    summary={article.summary}
                    title={article.title}
                    url={article.url}
                  />
                </div>
              ))}
              {articles?.map((article) => (
                <div className={articleGrid} key={article.id}>
                  <Article
                    // date={article.date}
                    img={article.img}
                    summary={article.summary}
                    title={article.title}
                    url={article.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ArticlesPage;
