// /api/users
const express = require("express");
const Users = require("../models/usersSeed.schema");
const usersSeed = require("../models/allUsersSeed");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes, RESET_CONTENT } = require("http-status-codes");

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
        res.send({ status: "success", data: data });
      })
      .catch((err) => res.send(err));
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  const allUsers = await Users.find({});
  res.send({ status: "success", data: allUsers });
});

router.post("/new", async (req, res) => {
  try {
    const foundUser = await Users.findOne({
      userName: req.body.userName,
      usercategory: req.body.usercategory,
    });
    if (foundUser) {
      res.send({ status: "failed", data: "Replicated username" });
      return;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;
    const protectedUser = await Users.create(user);
    res.send({ status: "success", data: "New user created" });
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
      res.send({ status: "failed", data: "No user found" });
    } else {
      if (await bcrypt.compare(req.body.password, foundUser.password)) {
        const accessToken = jwt.sign(
          foundUser.userName,
          process.env.ACCESS_TOKEN_SECRET
        );
        res.json({ status: "success", accessToken: accessToken });
        res.send({ status: "success", data: foundUser });
      } else {
        res.send({ status: "failed", data: "Wrong password" });
      }
    }
  } catch (error) {
    res.send({ status: "failed", data: error });
  }
});

const authenicateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = router;
