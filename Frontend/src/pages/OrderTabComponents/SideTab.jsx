import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

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
    cartArr.push({ name: item.name, qty: count, foodID: item.foodID });
  }
  return cartArr;
};

function SideTab({ cart, user, setCart }) {
  const [newCart, setNewCart] = useState(manipulateCart(cart));

  useEffect(() => {
    setNewCart(manipulateCart(cart));
    console.log("useeffect");
  }, [cart]);

  const handleAddToOrder = () => {
    const orderObj = {
      tblNum: user.username,
      orders: [{ orderNum: 1, items: [] }],
    };

    for (let food of newCart) {
      orderObj.orders[0].items.push({
        foodID: food.foodID,
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
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
              {newCart.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div>{item.name}: </div>
                  <input
                    style={{ marginRight: "2rem", textAlign: "center" }}
                    type="text"
                    maxlength="2"
                    size="2"
                    value={item.qty}
                    onChange={(e) => {
                      for (let i in newCart) {
                        if (newCart[i].name === item.name) {
                          newCart[i].qty = e.target.value;
                          setNewCart([...newCart]);
                          break;
                        }
                      }
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
