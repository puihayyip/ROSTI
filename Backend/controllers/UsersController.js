// /api/users
const express = require("express");
const Users = require("../models/usersSeed.schema");
const usersSeed = require("../models/allUsersSeed");
const bcrypt = require("bcrypt");
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
  const allUsers = await Users.find({});
  res.send(allUsers);
});

router.post("/new", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;
    const protectedUser = await Users.create(user);
    res
      .status(StatusCodes.CREATED)
      .send({ status: "success", data: protectedUser });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
