import CashierHead from "../GeneralComponents/CashierHeader";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CompFinalOrderList from "./CompFinalOrderList";
import CompEditOrderList from "./CompEditOrderList";
import CompFinalOrderButtons from "./CompFinalOrderButtons";
import CompEditOrderButtons from "./CompEditOrderButtons";

export default function TablePreviewBill({ user }) {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [order, setOrder] = useState({});
  const [update, setUpdate] = useState(false);
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
    fetch(`/api/orders/${tblNum}`, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (res.status === 403) return navigate("/");
        return res.json();
      })
      .then((data) => {
        setOrder(data.data);
        console.log("fetching");
      });
  }, [update]);

  return (
    <>
      <CashierHead user={user} />
      {edit === true ? (
        <>
          <CompEditOrderList order={order} setUpdate={setUpdate} />
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
