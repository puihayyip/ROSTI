const mongoose = require("mongoose");

var subSchema = new mongoose.Schema(
  {
    orderNum: { type: Number },
    items: [
      {
        _id: { type: String },
        name: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        foodPrepared: { type: String, default: "off" },
        foodSent: { type: String, default: "off" },
      },
    ],
  },
  { _id: false, timestamps: { createdAt: true, updatedAt: false } }
);

const ordersSchema = new mongoose.Schema(
  {
    tblNum: { type: Number, unique: true },
    orders: [subSchema],
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model("orders", ordersSchema);
