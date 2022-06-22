import Head from "../GeneralComponents/MainHeader";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CompFinalOrderList from "./CompFinalOrderList";
import CompEditOrderList from "./CompEditOrderList";
import CompFinalOrderButtons from "./CompFinalOrderButtons";
import CompEditOrderButtons from "./CompEditOrderButtons";

export default function TablePreviewBill({ user }) {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(0);
  let { tblNum } = useParams();

  const nav = useNavigate();
  const handlePayment = () => {
    nav(`/receipt/${tblNum}`);
  };
  const handleConfirm = () => {
    setEdit(!edit);
    nav(`/tablebill/${tblNum}`);
    //update with the PUT route
  };
  const handleEdit = () => {
    setEdit(!edit);
    nav(`/tablebill/${tblNum}/edit`);
  };

  useEffect(() => {
    fetch(`/api/orders/${tblNum}`)
      .then((response) => response.json())
      .then((data) => {
        setOrder(data.data);
        console.log("fetching");
      });
  }, [edit]);

  return (
    <>
      <Head user={user} />
      {edit === true ? (
        <>
          <CompEditOrderList order={order} />
          <CompEditOrderButtons handleConfirm={handleConfirm} />
        </>
      ) : (
        <>
          <CompFinalOrderList order={order} />
          <CompFinalOrderButtons
            handleEdit={handleEdit}
            handlePayment={handlePayment}
          />
        </>
      )}
    </>
  );
}
