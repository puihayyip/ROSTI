import Button from "@mui/material/Button";
import SideTabMessage from "./SideTabMessage";
import SideTabRunningTab from "./SideTabRunningTab";

function SideTab({ cart, user, setCart, FirstOrder, setFirstOrder }) {
  const handleAddToOrder = () => {
    
    setFirstOrder(false)
    
    const orderObj = {
      tblNum: user.username,
      orders: [{ orderNum: 1, items: [] }],
    };

    for (let food of cart) {
      orderObj.orders[0].items.push({
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

            <SideTabRunningTab user={user}/>

          </>
        ) : (
          <SideTabMessage cart ={cart} user={user}/>
        )
        }
      </div>
    </div>
  );
}

export default SideTab;
