// This file (component) is used to initialize the pages
import Head from "next/head";
import Navbar from "@/components/nav/index.js";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <Navbar />
        {/* active page */}
        <Component {...pageProps} />
      </main>
    </>
  );
}