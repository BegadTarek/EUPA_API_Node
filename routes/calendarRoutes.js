const express = require("express");

const router = express.Router();

module.exports = router;

const Game = require("../models/gameModel");

//Calendar post method
router.post("/addGame", async (req, res) => {
  const game = new Game({
    home: req.body.home,
    away: req.body.away,
    home_score: req.body.home_score,
    away_score: req.body.away_score,
    date: req.body.date,
    tournament: req.body.tournament,
  });

  try {
    const dataToSave = await game.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Calendar Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Game.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Calendar Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Game.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Calendar Update by ID
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Game.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Calendar Delete by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Game.findByIdAndDelete(id);
    res.send(`Calendar game ${data.home} - ${data.away} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
