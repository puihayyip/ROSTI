import React from "react";

const manipulateCart = (cart) => {
  const uniqueItem = new Set(cart);
  const cartArr = [];
  for (let item of uniqueItem) {
    let count = 0;
    for (let food of cart) {
      if (food._id === item._id) {
        count++;
      }
    }
    cartArr.push({ name: item.name, qty: count });
  }
  return cartArr;
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
        {cart.length > 0 ? (
          <ul>
            {newCart.map((item, index) => (
              <li key={index}>
                {item.name}: {item.qty}
              </li>
            ))}
          </ul>
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </div>
    </div>
  );
}

export default SideTab;
