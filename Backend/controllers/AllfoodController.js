// /api/allfood

const express = require("express");
const Allfood = require("../models/foodSeed.schema");
const { StatusCodes } = require("http-status-codes");
const allFoodSeed = require("../models/allFoodSeed");

const router = express.Router();

//! Seed Route (reset database)
router.get("/seed", async (req, res) => {
  try {
    await Allfood.deleteMany({});
    const newAllfood = await Allfood.create(allFoodSeed);
    res.send(newAllfood);
  } catch (error) {
    res.send(error);
  }
});

//! ALL
router.get("/", async (req, res) => {
  const allFood = await Allfood.find({});
  res.send(allFood);
});

//! INDEX
router.get("/:id", async (req, res) => {
  try {
    const FoodItem = await Allfood.findOne({
      _id: req.params.id
    });
    // console.log(req.params.id);
    res.send({ status: "success", data: FoodItem });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
