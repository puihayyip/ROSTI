const mongoose = require("mongoose");

const allfoodSchema = new mongoose.Schema(
  {
    foodID: { type: Number, unique: true },
    name: { type: String },
    des: { type: String },
    price: { type: Number, min: 0 },
    img: { type: String },
    mainSect: { type: String },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Allfood", allfoodSchema);
