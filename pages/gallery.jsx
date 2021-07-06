import React from "react";
import Layout from "../components/Layout";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { getBlobs } from "../lib/blobs";
import Blobcard from "../components/Blobcard";
import { Box, Column } from "gestalt";

export default function Gallery({ blobsData }) {
  const downloadBlob = (blob, filename) => {
    const objectUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
  };

  const downloadHandler = () => {
    const svg = svgRef.current.outerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, "blob.svg");
  };

  return (
    <Layout>
      <Container>
        <Box display="flex" direction="row" wrap>
          {blobsData.map((each, idx) => (
            <Column smSpan={6} mdSpan={4} lgSpan={3} key={`blobs-${idx}`}>
              <Blobcard blob={each} />
            </Column>
          ))}
        </Box>
      </Container>
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
