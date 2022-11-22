const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  logo: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  acronym: {
    required: true,
    type: String,
  },
  points: {
    required: true,
    type: Number,
  },
  wins: {
    required: true,
    type: Number,
  },
  ties: {
    required: true,
    type: Number,
  },
  losses: {
    required: true,
    type: Number,
  },
  points_for: {
    required: true,
    type: Number,
  },
  points_against: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Team", teamSchema);
