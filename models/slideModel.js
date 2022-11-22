const mongoose = require("mongoose");

const slideSchema = new mongoose.Schema({
  src: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  paragraph: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Slide", slideSchema);
