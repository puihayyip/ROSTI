const express = require("express");
const Users = require("../models/Users");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

router.get("/", async (req, res) => {
	res.send("At UsersController");
});

module.exports = router;