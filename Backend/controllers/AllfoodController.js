// /api/allfood

const express = require("express");
const Allfood = require("../models/Allfood");
const { StatusCodes } = require("http-status-codes");
const allfoodseed = require("../models/allfoodseed")

const router = express.Router();

//! Seed Route (reset database)
router.get("/seed", async (req, res) => {
	try {
		await Allfood.deleteMany({});
		const newAllfood = await Allfood.create(allfoodseed);
		console.log(newAllfood);
	} catch (error) {
		res.send(error);
	}
});

router.get("/", async (req, res) => {
	res.send("At AllfoodController");
});

module.exports = router;