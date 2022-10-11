/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title} | Tony Airways</title>
        <meta name="description" content="Airlines" />
      </Head>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
