const express = require("express");
const Allfood = require("../models/Allfood");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

router.get("/", async (req, res) => {
	res.send("At allfoodcontroller");
});

module.exports = router;