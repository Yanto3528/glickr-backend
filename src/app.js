require("dotenv").config();
const express = require("express");
const cors = require("cors");

const imagesRouter = require("./routes/images");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/images", imagesRouter);

module.exports = app;
