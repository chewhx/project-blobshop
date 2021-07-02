import React from "react";
import Layout from "../components/Layout";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { getBlobs } from "../lib/blobs";

export default function Gallery({ blobsData }) {

  const svgRef = React.useRef();

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
      <h1>Gallery</h1>
      <Container>
        <Row>
          {blobsData.map((each, idx) => (
            <Col md={4} key={`blobs-${idx}`}>
              <Card>
                <Card.Body>
                  <svg
                    ref={svgRef}
                    width="100%"
                    height="100%"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke={each.strokeColor}
                      strokeWidth={each.strokeWidth}
                      fill={each.fillColor}
                      d={each.svgPath}
                    />
                  </svg>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-around">
                    <Button variant="light">Copy SVG</Button>
                    <Button variant="light" onClick={() => downloadHandler()}>
                      Download SVG
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
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
