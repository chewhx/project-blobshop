// import blobs from "../../data/blobs";
// export default function handler(req, res) {
//   res.status(200).json(blobs);
// }

import connectDB from "../../middlewares/mongodb";
import Blob from "../../models/Blob";

const handler = async (req, res) => {
  try {
    if (req.method === "GET") {
      const allBlobs = await Blob.find({});
      res.status(200).json(allBlobs);
      return;
    }
    if (req.method === "POST") {
      const newBlob = await Blob.create(req.body);
      if (newBlob) {
        res.status(201).json(newBlob);
      }
    }
    res.status(422).send("Invalid request method");
  } catch (err) {
    res.status(400).json(err);
  }
};

export default connectDB(handler);
