import React from "react";
import Layout from "../layouts/_layout";
import Blobcard from "../components/Blobcard";
import { Box, Column, Spinner } from "gestalt";
import { getBlobs } from "../lib/blobs";

export default function Gallery() {
  const [blobs, setBlobs] = React.useState();
  React.useEffect(() => {
    fetch(`/api/blobs`)
      .then((res) => res.json())
      .then((data) => setBlobs(data));
  }, []);
  return (
    <Layout>
      <Box display="flex" wrap justifyContent="center">
        {!blobs ? (
          <Spinner accessibilityLabel="loading-gallery" show={true} />
        ) : (
          blobs.map((each, idx) => (
            <Column smSpan={6} mdSpan={4} lgSpan={3} key={`blobs-${idx}`}>
              <Blobcard blob={each} />
            </Column>
          ))
        )}
      </Box>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const blobsData = await getBlobs();
//   return {
//     props: {
//       blobsData,
//     },
//   };
// }
