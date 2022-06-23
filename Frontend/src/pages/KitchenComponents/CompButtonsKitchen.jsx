import ButtontrueCooked from "./ButtontrueCooked";
import ButtonfalseCooked from "./ButtonfalseCooked";
import { useNavigate } from "react-router-dom";

export default function CompButtonsKitchen({
  item,
  orderNum,
  tblNum,
  setUpdate,
}) {
  const navigate = useNavigate();
  const handleKitchen = () => {
    console.log("Kitchen completed this dish");
    setUpdate((update) => !update);
    fetch(`/api/orders/edit/${tblNum}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        edit: item.foodPrepared === "on" ? "off" : "on",
        orderNum: orderNum,
        itemID: item._id,
        field: "foodPrepared",
      }),
    }).then((res) => {
      if (res.status === 403) return navigate("/");
      return res.json();
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
