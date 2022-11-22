const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  home: {
    required: true,
    type: String,
  },
  away: {
    required: true,
    type: String,
  },
  home_score: {
    required: true,
    type: Number,
  },
  away_score: {
    required: true,
    type: Number,
  },
  date: {
    required: true,
    type: String,
  },
  tournament: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Game", gameSchema);
