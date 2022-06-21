import ButtontrueServed from "./ButtontrueServed";
import ButtonfalseServed from "./ButtonfalseServed";
import { useState } from "react";

export default function CompButtonsService({ count, toggle }) {
  const [cooked, SetCooked] = useState(false);
  const [served, SetServed] = useState(false);

  const handleService = () => {
    console.log(toggle);
    console.log(toggle[count]);
    if (toggle[count]) {
      console.log("Dish has been served to table");
      SetServed(!served);
    }
  };

  return (
    <>
      {served === true ? (
        <ButtontrueServed handleService={handleService} />
      ) : (
        <ButtonfalseServed handleService={handleService} />
      )}
    </>
  );
  // }

  // else {

  //   alert("Food not ready, nothing to serve")
  // }
}
