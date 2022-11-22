const express = require("express");

const router = express.Router();

module.exports = router;

const Team = require("../models/teamModel");

//Teams post method
router.post("/addTeam", async (req, res) => {
  const team = new Team({
    logo: req.body.logo,
    name: req.body.name,
    acronym: req.body.name,
    points: req.body.points,
    wins: req.body.wins,
    ties: req.body.ties,
    losses: req.body.losses,
    points_for: req.body.points_for,
    points_against: req.body.points_against,
  });

  try {
    const dataToSave = await team.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Teams Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Team.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Teams Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Team.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Teams Update by ID
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Team.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Team Delete by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Team.findByIdAndDelete(id);
    res.send(`Team ${data.name} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
