// /api/users
const express = require("express");
const Users = require("../models/usersSeed.schema");
const usersSeed = require("../models/allUsersSeed");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

//! Seed Route (reset database)
router.get("/seed", async (req, res) => {
  try {
    await Users.deleteMany({});
    const newUsers = await Users.create(usersSeed);
    res.send(newUsers);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  res.send("At UsersController");
});

module.exports = router;
