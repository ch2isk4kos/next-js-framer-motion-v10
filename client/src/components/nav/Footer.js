import React from "react";
import Link from "next/link";
import Layout from "../utils/Layout";

const Footer = () => {
  const footer = `w-full border-t-2 border-solid border-dark font-medium text-lg`;
  const layout = `flex items-center justify-between py-8`;
  const stack = `text-blue-700 text-4xl p-1 mb-1`;
  const p = `flex items-center`;
  return (
    <footer className={footer}>
      <Layout className={layout}>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <p className={p}>
          {/* Built with <span className={star}>&#9734;</span> */}
          <span className={stack}>&#9781;</span>
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
