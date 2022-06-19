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
    res.send({ status: "success", data: newOrders });
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allOrders = await ordersSchema.find({});
    res.send({ status: "success", data: allOrders });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
