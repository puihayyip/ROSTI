import ButtontrueServed from "./ButtontrueServed";
import ButtonfalseServed from "./ButtonfalseServed";

export default function CompButtonsService({
  item,
  orderNum,
  tblNum,
  setUpdate,
}) {
  const handleService = () => {
    if (item.foodPrepared === "on") {
      console.log("Dish has been served to table");
      setUpdate((update) => !update);
      fetch(`/api/orders/edit/${tblNum}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          edit: item.foodSent === "on" ? "off" : "on",
          orderNum: orderNum,
          itemID: item._id,
          field: "foodSent",
        }),
      });
    } else {
      alert("Food not ready, nothing to serve");
    }
  };

  return (
    <>
      {item.foodSent === "on" ? (
        <ButtontrueServed handleService={handleService} />
      ) : (
        <ButtonfalseServed handleService={handleService} />
      )}
    </>
  );
}
