import mongoose from "mongoose";

const blobSchema = new mongoose.Schema(
  {
    name: String,
    extraPoints: Number,
    fillColor: String,
    randomness: Number,
    seed: Number,
    strokeColor: String,
    strokeWidth: Number,
    svgPath: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blob || mongoose.model("Blob", blobSchema);
