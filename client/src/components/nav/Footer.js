import React from "react";
import Link from "next/link";
import Layout from "../utils/Layout";

const Footer = () => {
  const footer = `w-full`;
  return (
    <footer className={footer}>
      <Layout>
        <span>Rights</span>
        <Link href={"/"}>Chris Kakos</Link>
        <Link href={"/"}>Something Else</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
