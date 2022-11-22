require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => console.log(error));

database.once("connected", () => console.log("Database Connected"));

const calendarRoutes = require("./routes/calendarRoutes");
const teamsRoutes = require("./routes/teamRoutes");
const articlesRoutes = require("./routes/articlesRoutes");
const carouselRoutes = require("./routes/carouselRoutes");

const app = express();

app.listen(8000, () => {
  console.log(`Server started at ${8000}`);
});

app.use(cors());
app.use(express.json());
app.use("/calendar", calendarRoutes);
app.use("/teams", teamsRoutes);
app.use("/articles", articlesRoutes);
app.use("/carousel", carouselRoutes);
