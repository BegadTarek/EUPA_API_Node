const express = require("express");

const router = express.Router();

module.exports = router;

const Slide = require("../models/slideModel");

//Slide post method
router.post("/addSlide", async (req, res) => {
  const slide = new Slide({
    src: req.body.src,
    title: req.body.title,
    paragraph: req.body.paragraph,
  });

  try {
    const dataToSave = await slide.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Slides Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Slide.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Slides Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Slide.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Slide Update by ID
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Slide.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Slide Delete by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Slide.findByIdAndDelete(id);
    res.send(`Slide ${data.title} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
