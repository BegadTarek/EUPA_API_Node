const express = require("express");

const router = express.Router();

module.exports = router;

const Article = require("../models/articleModel");

//Article post method
router.post("/addArticle", async (req, res) => {
  const article = new Article({
    title: req.body.title,
    paragraph: req.body.paragraph,
    src: req.body.src,
    full_article: req.body.full_article,
  });

  try {
    const dataToSave = await article.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Articles Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Article.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Articles Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Article.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Articles Update by ID
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Article.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Article Delete by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Article.findByIdAndDelete(id);
    res.send(`Article ${data.title} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
