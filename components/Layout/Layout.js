import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title} | Tony Airways</title>
        <meta name="description" content="Airlines" />
      </Head>
      <Navbar/>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;