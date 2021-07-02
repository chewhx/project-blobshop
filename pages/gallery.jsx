import React from "react";
import Layout from "../components/Layout";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { getBlobs } from "../lib/blobs";

export default function Gallery({ blobsData }) {
  const blob = {
    extraPoints: 6,
    fillColor: "#15c8cb",
    randomness: 5,
    seed: 0.9121201641829504,
    strokeColor: "#000000",
    strokeWidth: 0,
    svgPath:
      "M128,251.39398243029913C147.81008422630597,245.31571017164393,151.16224167500454,216.6020831676553,168.75822205195476,205.65830387174213C184.49314947450523,195.87200215619944,209.7128362809822,206.7466684480172,222.03611088631268,192.90844077023343C233.9843970774694,179.49130044285437,229.1353260262339,157.90422172646473,227.18952585574942,140.0437889442808C225.488193156237,124.42731466254264,218.27906403605422,110.50486996617515,211.5141015245474,96.3272790507718C205.19967190078893,83.09388715577194,198.2188020558451,70.62779647753632,188.732267775505,59.44744094347665C178.17237775185873,47.00208193501246,167.82870872659822,33.66618341613705,152.84825965007641,27.186647659093808C136.92657463585087,20.299996475602896,118.91453912364378,18.801457014293746,101.83971754515983,21.863561891372626C84.26990801091932,25.01443519431474,66.99148345312501,32.2625077024437,54.338112520230425,44.85291729368656C41.91344049762314,57.21576594730585,38.53359408463858,75.33270996942566,31.828101800590645,91.52680997313782C24.93131375579493,108.18289882846722,9.366212146780839,124.44845079166548,14.187203423293994,141.81937547641527C19.16498641055447,159.75524974152498,46.05669472536216,161.97716505194276,55.7846420377589,177.8466625301025C66.34757810808473,195.07830266412975,57.434572510038265,221.0489089791168,71.5950796154014,235.47059676707593C85.48445712984639,249.6161541678106,109.04753694147698,257.2091132054038,128,251.39398243029913",
  };

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
          {blobsData.blobs.map((each, idx) => (
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

export function getStaticProps() {
  const blobsData = getBlobs();
  return {
    props: {
      blobsData,
    },
  };
}
