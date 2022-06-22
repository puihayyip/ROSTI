import ButtontrueServed from "./ButtontrueServed";
import ButtonfalseServed from "./ButtonfalseServed";
import { useEffect, useState } from "react";

export default function CompButtonsService({ count, toggle }) {
  const [cooked, SetCooked] = useState(false);
  const [served, SetServed] = useState(false);

  const handleService = () => {
    if (toggle[count - 1]) {
      console.log("Dish has been served to table");
      SetServed(!served);
    } else {
      alert("Food not ready, nothing to serve");
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
}
