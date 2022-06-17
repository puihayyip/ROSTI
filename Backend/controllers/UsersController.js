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
    const protectedUsersSeed = usersSeed.map(async (user) => {
      user.password = await bcrypt.hash(user.password, 10);
      return user;
    });

    await Promise.all(protectedUsersSeed)
      .then((data) => {
        Users.create(data);
        res.send(data);
      })
      .catch((err) => res.send(err));
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

router.post("/login", async (req, res) => {
  try {
    const foundUser = await Users.findOne({
      userName: req.body.userName,
      usercategory: req.body.usercategory,
    });
    if (!foundUser) {
      res.send("No user found");
    } else {
      if (await bcrypt.compare(req.body.password, foundUser.password)) {
        res.send(foundUser);
      } else {
        res.send("Wrong password");
      }
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
