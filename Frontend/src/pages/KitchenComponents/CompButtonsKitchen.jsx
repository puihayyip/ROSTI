import ButtontrueCooked from "./ButtontrueCooked";
import ButtonfalseCooked from "./ButtonfalseCooked";
import { useState } from "react";

export default function CompButtonsKitchen({ count, setToggle, toggle }) {
  const [cooked, SetCooked] = useState(false);
  const handleKitchen = () => {
    console.log("Kitchen completed this dish");
    SetCooked(!cooked);
    const newToggle = [...toggle];
    newToggle.splice(count - 1, 1, !cooked);
    console.log(newToggle);
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
