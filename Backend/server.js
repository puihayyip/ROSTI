const { urlencoded } = require("express");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.send("Hello restaurant owners");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening to port ${PORT}`);
});
