import ButtontrueCooked from "./ButtontrueCooked";
import ButtonfalseCooked from "./ButtonfalseCooked";
import { useState } from "react";

export default function CompButtonsKitchen({
  count,
  setToggle,
  toggle,
  setUpdate,
}) {
  const [cooked, SetCooked] = useState(false);
  const handleKitchen = () => {
    console.log("Kitchen completed this dish");
    SetCooked(!cooked);
    setUpdate((update) => !update);
    const newToggle = [...toggle];
    newToggle.splice(count - 1, 1, !cooked);
    setToggle(newToggle);
  };

  return (
    <>
      {cooked === true ? (
        <ButtontrueCooked handleKitchen={handleKitchen} />
      ) : (
        <ButtonfalseCooked handleKitchen={handleKitchen} />
      )}
    </>
  );
}
