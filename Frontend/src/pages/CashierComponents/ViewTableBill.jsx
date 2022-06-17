import Head from "../Head";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ViewTableBillComponent from "./ViewTableBillComponent";
import CompFinalOrderList from "./CompFinalOrderList";
import CompEditOrderList from "./CompEditOrderList";
import CompFinalOrderButtons from "./CompFinalOrderButtons";
import CompEditOrderButtons from "./CompEditOrderButtons";

export default function TablePreviewBill() {
  const [edit, setEdit]= useState(false)

  const nav = useNavigate();
  const handlePayment = () => {
    nav("/receipt");
  }
  const handleConfirm = () => {
    setEdit(!edit)
  };
const handleEdit = () => {
  setEdit(!edit)
};

  return (
    <>
      <Head />

      {/* <ViewTableBillComponent edit={edit}/> */}
      {edit=== true? <CompEditOrderList/> : <CompFinalOrderList />}
      {edit=== true? <CompEditOrderButtons handleConfirm={handleConfirm}/> : <CompFinalOrderButtons handlePayment={handlePayment} handleEdit={handleEdit}/>}

    </>
  );
}
