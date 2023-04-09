import Head from "next/head";
import Layout from "@/components/utils/Layout";
import Thumbnail from "@/components/home/Thumbnail";
import Header from "@/components/home/Header";

export default function HomePage() {
  const main = `flex items-center text-dark w-full min-h-screen`;
  const layout = `pt-0`;

  return (
    <>
      <Head>
        <title>Chris Kakos</title>
        <meta
          name="description"
          content="Full Stack Software Engineering Portfolio Page"
        />
      </Head>
      <main className={main}>
        <Layout className={layout}>
          <Header />
        </Layout>
        <Thumbnail />
      </main>
    </>
  );
}
