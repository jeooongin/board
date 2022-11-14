import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

import Layout from "../components/Layout";

const _app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>JI-board</title>
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
};

export default _app;
