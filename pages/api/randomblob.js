import * as blobs2 from "blobs/v2";

const handler = (req, res) => {
  if (req.method === "GET") {
    const blobSvgPath = blobs2.svgPath({
      seed: Math.random(),
      extraPoints: 10,
      randomness: 5,
      size: 256,
    });
    res.status(200).send(blobSvgPath);
    return;
  }
  res.status(422).send("Invalid request method");
};

export default handler;
