import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

function SideTab({ cart, user, setCart }) {
  const handleAddToOrder = () => {
    const orderObj = {
      tblNum: user.username,
      orders: [{ orderNum: 1, items: [] }],
    };

    for (let food of cart) {
      orderObj.orders[0].items.push({
        foodID: food.food.foodID,
        name: food.food.name,
        price: food.food.price,
        quantity: food.qty,
        foodPrepared: "off",
        foodSent: "off",
      });
    }

    fetch("/api/orders/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(orderObj),
    });
    // .then((response) => response.json())
    // .then((data) => console.log(data));
    setCart([]);
  };

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
          <>
            <ul>
              {cart.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div>{item.food.name}: </div>
                  <input
                    style={{ marginRight: "2rem", textAlign: "center" }}
                    type="text"
                    maxlength="2"
                    size="2"
                    value={item.qty}
                    id={item.food.name}
                    onChange={(e) => {
                      const index = cart.findIndex(
                        (food) => food.food.name === e.target.id
                      );
                      const newArr = [...cart];
                      newArr[index].qty = parseInt(e.target.value);
                      setCart(newArr);
                    }}
                  />
                </li>
              ))}
            </ul>
            <Button
              variant="contained"
              color="warning"
              sx={{ position: "absolute", right: "2rem", marginTop: "1rem" }}
              onClick={handleAddToOrder}
            >
              Add to order
            </Button>
          </>
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </div>
    </div>
  );
}

export default SideTab;
