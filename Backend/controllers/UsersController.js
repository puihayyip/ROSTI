// /api/users
const express = require("express");
const app = express();
const Users = require("../models/usersSeed.schema");
const usersSeed = require("../models/allUsersSeed");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./authController");
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
    await Users.create(user);
    res.send({ status: "success", data: "New user created" });
  } catch (error) {
    res.send(error);
  }
});

let refreshTokens = [];
router.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken))
    return res.send("No refresh token found");
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log(user);
    const accessToken = generateAccessToken({ user: user });
    res.json({ accessToken: accessToken });
  });
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
        const accessToken = generateAccessToken(foundUser);
        const refreshToken = jwt.sign(
          { user: foundUser },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "1d" }
        );
        refreshTokens.push(refreshToken);
        res.send({
          status: "success",
          data: foundUser,
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
      } else {
        res.send({ status: "failed", data: "Wrong password" });
      }
    }
  } catch (error) {
    res.send({ status: "failed", data: error });
  }
});

function generateAccessToken(foundUser) {
  return jwt.sign({ user: foundUser }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
}

module.exports = router;
