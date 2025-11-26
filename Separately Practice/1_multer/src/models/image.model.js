import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  public_id: { type: String, required: true }, // future delete er jonno lagbe
}, { timestamps: true });

export default mongoose.model("Image", imageSchema);
