// /api/order

const express = require("express");
const ordersSchema = require("../models/ordersSeed.schema");
const { StatusCodes } = require("http-status-codes");
const allOrdersSeed = require("../models/allOrdersSeeds");

const router = express.Router();

//! Seed Route (reset database)
router.get("/seed", async (req, res) => {
  try {
    await ordersSchema.deleteMany({});
    const newOrders = await ordersSchema.create(allOrdersSeed);
    res.send(newOrders);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  res.send("At All Orders Controller");
});

module.exports = router;