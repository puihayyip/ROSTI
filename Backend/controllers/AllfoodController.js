// /api/allfood

const express = require("express");
const Allfood = require("../models/foodSeed.schema");
const { StatusCodes } = require("http-status-codes");
const allfoodseed = require("../models/allFoodSeed");

const router = express.Router();

//! Seed Route (reset database)
router.get("/seed", async (req, res) => {
  try {
    await Allfood.deleteMany({});
    const newAllfood = await Allfood.create(allfoodseed);
    res.send(newAllfood);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  res.send("At AllfoodController");
});

module.exports = router;
