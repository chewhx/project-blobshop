import * as blobs2 from "blobs/v2";

const handler = (req, res) => {
  if (req.method === "GET") {
    const {
      fill,
      strokeWidth,
      strokeColor,
      randomness,
      extraPoints,
      size,
      seed,
    } = req.query;
    const blobSvg = blobs2.svg(
      {
        seed: +seed || Math.random(),
        extraPoints: +extraPoints || 10,
        randomness: +randomness || 5,
        size: +size || 256,
      },
      {
        fill: `#${fill || "5cb85c"}`,
        stroke: `#${strokeColor || "000000"}`,
        strokeWidth: +strokeWidth || 0,
      }
    );
    res.status(200).send(blobSvg);
    return;
  }
  res.status(422).send("Invalid request method");
};

export default handler;
