import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import { buffer } from "stream/consumers";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

// MongoDB Connection
mongoose
  .connect("mongodb+srv://taco:MEpr1l2kjOd77jGX@main.b4gu2.mongodb.net/articlesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Article Schema
const articleSchema = new mongoose.Schema({
  title: String,
  date: String,
  image: buffer,
});

const Article = mongoose.model("Article", articleSchema);

// CRUD Routes
app.get("/articles", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

app.post("/articles", upload.single("image"), async (req, res) => {
  try {
    const newArticle = new Article({
      title: req.body.title,
      date: req.body.date,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/articles/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      title: req.body.title,
      date: req.body.date,
    };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedArticle = await Article.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(updatedArticle);
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/articles/:id", async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);

    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ message: "Server error" });
  }
});





// Define Schemas for Slider Images and Content
const sliderImageSchema = new mongoose.Schema({
  image: String,
});

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});

// Create Models
const SliderImage = mongoose.model("SliderImage", sliderImageSchema);
const Content = mongoose.model("Content", contentSchema);

// CRUD Routes for Slider Images
app.get("/slider-images", async (req, res) => {
  const sliderImages = await SliderImage.find();
  res.json(sliderImages);
});

app.post("/slider-images", async (req, res) => {
  const newSliderImage = new SliderImage(req.body);
  await newSliderImage.save();
  res.status(201).json(newSliderImage);
});

app.delete("/slider-images/:id", async (req, res) => {
  await SliderImage.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// CRUD Routes for Content
app.get("/content", async (req, res) => {
  const contentData = await Content.find();
  res.json(contentData);
});

app.post("/content", async (req, res) => {
  const newContent = new Content(req.body);
  await newContent.save();
  res.status(201).json(newContent);
});

app.delete("/content/:id", async (req, res) => {
  await Content.findByIdAndDelete(req.params.id);
  res.status(204).send();
});





const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


