// /api/users
const express = require("express");
const Users = require("../models/Users");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

//! Seed Route (reset database)
router.get("/seed", async (req, res) => {
	try {
		await Users.deleteMany({});
		const newUsers = await Users.create([
			{
				username: "table",
				password: "123",
				usercategory: "table",
			},
			{
				username: "kitchen",
				password: "123",
				usercategory: "table",
			},
			{
				username: "cashier",
				password: "123",
				usercategory: "table",
			},
		]);
		console.log(newUsers);
	} catch (error) {
		res.send(error);
	}
});

router.get("/", async (req, res) => {
	res.send("At UsersController");
});

module.exports = router;
