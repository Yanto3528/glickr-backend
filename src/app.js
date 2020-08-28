require("dotenv").config();
const express = require("express");
const imagesRouter = require("./routes/images");

const app = express();

app.use(express.json());

app.use("/api/images", imagesRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
