const mongoose = require("mongoose");

const allfoodSchema = new mongoose.Schema({
	foodID: { type: Number, unique: true },
	name: { type: String },
	des: { type: String },
	price: { type: Number, min: 1 },
	img: { type: String },
});

module.exports = mongoose.model("Allfood", allfoodSchema);
