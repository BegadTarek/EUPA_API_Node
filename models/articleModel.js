const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  paragraph: {
    required: true,
    type: String,
  },
  src: {
    required: true,
    type: String,
  },
  full_article: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Article", articleSchema);
