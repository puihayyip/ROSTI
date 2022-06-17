const orders = [
  {
    tblNum: 34,
    orders: [
      {
        orderNum: 1, //array.length + 1
        items: [
          {
            foodID: 1,
            quantity: 1,
          },
          {
            foodID: 3,
            quantity: 1,
          },
          {
            foodID: 17,
            quantity: 2,
            foodPrepared: "on",
          },
          {
            foodID: 4,
            quantity: 2,
            foodPrepared: "on",
            foodSent: "on",
          },
        ],
      },
      {
        orderNum: 2,
        items: [
          {
            foodID: 5,
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    tblNum: 23,
    orders: [
      {
        orderNum: 1,
        items: [
          {
            foodID: 2,
            quantity: 1,
          },

          {
            foodID: 17,
            quantity: 1,
          },
          {
            foodID: 4,
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    tblNum: 12,
    orders: [
      {
        orderNum: 1,
        items: [
          {
            foodID: 6,
            quantity: 1,
            foodPrepared: true,
            foodSent: true,
          },
        ],
      },
    ],
  },
];

module.exports = orders;
