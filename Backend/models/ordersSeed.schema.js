const mongoose = require("mongoose");

var subSchema = new mongoose.Schema(
  {
    // your subschema content
    orderNum: { type: Number },
    items: [
      {
        foodID: { type: Number },
        quantity: { type: Number },
        foodPrepared: { type: String, default: 'off' },
        foodSent: { type: String, default: 'off' },
      },
    ],
  },
  { _id: false, timestamps: true }
);

const ordersSchema = new mongoose.Schema(
  {
    tblNum: { type: Number, unique: true },
    orders: [subSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", ordersSchema);
