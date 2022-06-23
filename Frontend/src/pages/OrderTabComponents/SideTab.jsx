import SideTabMessage from "./SideTabMessage";
import SideTabAddButton from "./SideTabAddButton";

function SideTab({ cart, user, setCart }) {
  
  const handleAddToOrder = () => {

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
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
    >
      <h1 style={{ color: "orange", fontWeight: "bold" }}>Order Tab</h1>

      <div className="top">
        {cart.length > 0 ? (
        
            <SideTabAddButton
              handleAddToOrder={handleAddToOrder}
              cart={cart}
              setCart={setCart}
              user ={user}
            />
          
        ) : (
          <SideTabMessage cart={cart} setCart={setCart} user={user} />
        )}
      </div>
      
    </div>
  );
}

export default SideTab;
