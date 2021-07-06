import React from "react";
import { Modal, Form } from "react-bootstrap";
import { Button, Card, Text, Box } from "gestalt";
import SvgModal from "./SvgModal";
import useDownloadSvg from "./useDownloadSvg";
import DownloadOptions from "./Blobmaker/DownloadOptions";

const Blobcard = ({ blob }) => {
  const svgRef = React.useRef();
  const { downloadSvg } = useDownloadSvg({ svgRef, fileName: blob.name });
  // --- Download svg: https://stackoverflow.com/questions/66610636/html-react-js-how-to-make-a-download-button-to-download-html-page-content

  return (
    <>
      <Box marginTop={6} marginBottom={6} ref={svgRef} padding={2}>
        <Card
          image={
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke={blob.strokeColor}
                strokeWidth={blob.strokeWidth}
                fill={blob.fillColor}
                d={blob.svgPath}
              />
            </svg>
          }
        >
          <Text align="center" weight="bold">
            {blob.name}
          </Text>
          <Box display="flex" justifyContent="center" padding={2}>
            <DownloadOptions svg={svgRef} blob={blob} />
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Blobcard;
