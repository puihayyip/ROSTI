import Head from "../GeneralComponents/MainHeader";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CompFinalOrderList from "./CompFinalOrderList";
import CompEditOrderList from "./CompEditOrderList";
import CompFinalOrderButtons from "./CompFinalOrderButtons";
import CompEditOrderButtons from "./CompEditOrderButtons";

export default function TablePreviewBill() {
  const [edit, setEdit] = useState(false);
  const [order, setOrder] = useState(0);
  let { tblNum } = useParams();

  const nav = useNavigate();
  const handlePayment = () => {
    nav(`/receipt/${tblNum}`);
<<<<<<< HEAD
  };
  const handleConfirm = () => {
    setEdit(!edit);
  };
  const handleEdit = () => {
    setEdit(!edit);
  };
=======
  }
  const handleConfirm = () => {
    setEdit(!edit)
    nav(`/tablebill/${tblNum}`)
    //update with the PUT route
  };
const handleEdit = () => {
  setEdit(!edit)
  nav(`/tablebill/${tblNum}/edit`);
};
>>>>>>> 6071a2be4d801d6c833d71095f722e93d0730c9a

  useEffect(() => {
    fetch(`/api/orders/${tblNum}`)
      .then((response) => response.json())
      .then((data) => {
        setOrder(data.data);
      });
  }, [tblNum]);

  return (
    <>
      <Head />
      {edit === true ? (
        <CompEditOrderList order={order} />
      ) : (
        <CompFinalOrderList order={order} />
      )}
      {edit === true ? (
        <CompEditOrderButtons handleConfirm={handleConfirm} />
      ) : (
        <CompFinalOrderButtons
          handleEdit={handleEdit}
          handlePayment={handlePayment}
        />
      )}
    </>
  );
}
