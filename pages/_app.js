import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

import Layout from "../components/Layout";
import wrapper from "../store/configureStore";

const _app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Board</title>
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(_app);
