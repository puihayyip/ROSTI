// !DEPENDENCIES
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

//! CONTROLLERS
const allFoodController = require("./controllers/allFoodController");
const usersController = require("./controllers/usersController");
const orderController = require("./controllers/orderController");

//! CONFIG
const app = express();
const PORT = process.env.PORT || 4000;

//! MONGO CONNECTION
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/project3";
const db = mongoose.connection;
mongoose.connect(MONGO_URI);
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGO_URI));
db.on("disconnected", () => console.log("mongo disconnected"));

//! MIDDLEWARE
const publicPath = path.join(__dirname, "../Frontend/public/index.html");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("../Frontend/public"));
app.use("/api/allfood", allFoodController);
app.use("/api/users", usersController);
app.use("/api/orders", orderController);

app.get("/api/", (req, res) => {
  res.send("Hello restaurant owners");
});

app.get("/*", (req, res) => {
  res.sendFile(publicPath);
});

app.listen(PORT, (req, res) => {
  console.log(`Listening to port ${PORT}`);
});
