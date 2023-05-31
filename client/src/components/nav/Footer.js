import React from "react";
import Link from "next/link";
import Layout from "../utils/Layout";

const Footer = () => {
  const root = `w-full h-1 border-t-2 border-solid border-dark font-medium text-lg border-2 border-yellow-400`;
  // const layout = `flex items-center justify-between py-8`;
  const layout = `flex items-center justify-between`;
  const trigramForWater = `text-blue-700 text-4xl p-1 mb-1`;
  const p = `flex items-center`;
  return (
    <footer className={root}>
      <Layout className={layout}>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <p className={p}>
          <span className={trigramForWater}>&#9781;</span>
          by&nbsp;
          <Link className={""} href={"/"}>
            Chris Kakos
          </Link>
        </p>
        <Link href={"/"}>Something Else</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
