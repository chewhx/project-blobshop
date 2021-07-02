import blobs from "../../data/blobs";
export default function handler(req, res) {
  res.status(200).json(blobs);
}
