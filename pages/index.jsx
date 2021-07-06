import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import * as blobs2 from "blobs/v2";
import getColorName from "../utils/getColorName";
import generateColor from "../utils/generateColor";

import Blobmaker from "../components/Blobmaker";

export default function Home({ randomBlob }) {
  return (
    <Layout>
      <Head>
        <title>Blobshop</title>
      </Head>
      <Blobmaker initialValues={randomBlob} />
    </Layout>
  );
}

export function getStaticProps() {
  const fillColor = generateColor();
  const name = getColorName.name(fillColor)[1];
  const svgPath = blobs2.svgPath({
    seed: Math.random(),
    extraPoints: 10,
    randomness: 5,
    size: 256,
  });
  return {
    props: {
      randomBlob: {
        name,
        seed: Math.random(),
        strokeColor: "#000000",
        strokeWidth: 0,
        fillColor,
        randomness: 3,
        extraPoints: 5,
        svgPath,
      },
    },
  };
}
