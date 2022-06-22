import ButtontrueCooked from "./ButtontrueCooked";
import ButtonfalseCooked from "./ButtonfalseCooked";

export default function CompButtonsKitchen({
  item,
  orderNum,
  tblNum,
  setUpdate,
}) {
  const handleKitchen = () => {
    console.log("Kitchen completed this dish");
    setUpdate((update) => !update);
    fetch(`/api/orders/edit/${tblNum}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        edit: item.foodPrepared === "on" ? "off" : "on",
        orderNum: orderNum,
        itemID: item._id,
        field: "foodPrepared",
      }),
    });
  };

  return (
    <>
      {item.foodPrepared === "on" ? (
        <ButtontrueCooked handleKitchen={handleKitchen} />
      ) : (
        <ButtonfalseCooked handleKitchen={handleKitchen} />
      )}
    </>
  );
}
