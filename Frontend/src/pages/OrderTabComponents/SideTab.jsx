import React from "react";

const manipulateCart = (cart) => {
  const uniqueItem = new Set(cart);
  const cartObj = [];
  for (let item of uniqueItem) {
    let count = 0;
    for (let food of cart) {
      if (food._id === item._id) {
        count++;
      }
    }
    cartObj.push({ name: item.name, qty: count });
  }
  return cartObj;
};

function SideTab({ cart }) {
  const newCart = manipulateCart(cart);
  return (
    <div
      style={{
        borderLeft: "3px solid lightgray",
        paddingTop: "20px",
        height: "4500px",
      }}
    >
      <h1 style={{ color: "orange", fontWeight: "bold" }}>Add to Order Tab</h1>
      <div>
        <ul>
          {newCart.map((item, index) => (
            <li key={index}>
              {item.name}: {item.qty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideTab;
