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
            foodPrepared: true,
          },
          {
            foodID: 4,
            quantity: 2,
            foodPrepared: true,
            foodSent: true,
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
];

module.exports = orders;
