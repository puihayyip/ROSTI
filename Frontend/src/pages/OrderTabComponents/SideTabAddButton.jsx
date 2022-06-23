import Button from "@mui/material/Button";
import SideTabRunningTab from "./SideTabRunningTab";

export default function SideTabAddButton({
  handleAddToOrder,
  cart,
  setCart,
  user,
}) {
  return (
    <>
      <div
        style={{
          margin: "20px",
        }}
      >
        <h3 style={{ color: "black", fontWeight: "bold" }}>Add New Orders:</h3>

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

        <Button variant="contained" color="warning" onClick={handleAddToOrder}>
          Add to order
        </Button>
      </div>

      <SideTabRunningTab user={user} />
    </>
  );
}
