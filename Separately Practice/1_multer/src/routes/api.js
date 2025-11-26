import express from "express";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/upload-image", upload.single("image"), (req, res) => {
  try {
    return res.json({
      success: true,
      message: "Image uploaded successfully",
      imageUrl: req.file.path, // Cloudinary URL return
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
