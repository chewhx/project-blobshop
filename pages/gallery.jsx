import React from "react";
import Layout from "../layouts/_layout";
import Blobcard from "../components/Blobcard";
import { Box, Column } from "gestalt";
import { getBlobs } from "../lib/blobs";

export default function Gallery({ blobsData }) {
  return (
    <Layout>
      <Box display="flex" wrap>
        {blobsData.map((each, idx) => (
          <Column smSpan={6} mdSpan={4} lgSpan={3} key={`blobs-${idx}`}>
            <Blobcard blob={each} />
          </Column>
        ))}
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const blobsData = await getBlobs();
  return {
    props: {
      blobsData,
    },
  };
}
