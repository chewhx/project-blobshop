import React from "react";
import { IconButton, Card, Text, Box } from "gestalt";
import DownloadOptions from "../Blobmaker/DownloadOptions";
import useIndexedDb from "../../hooks/useIndexedDb";

const BlobcardLocal = ({ blob, blobKey, removeItemFromState }) => {
  const svgRef = React.useRef();
  const { removeItem: removeItemFromDB } = useIndexedDb();
  return (
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
          <IconButton
            accessibilityLabel={`delete-local-svg-${blob.name}`}
            icon="trash-can"
            onClick={() => {
              removeItemFromState(blobKey);
              removeItemFromDB(blobKey);
            }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default BlobcardLocal;
