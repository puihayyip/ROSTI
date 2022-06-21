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
        setData(data.data);
      });
  }, []);

  //! BREAKDOWN DATA
  console.log('data', data)

let tableOrder= data 
let orders = data?.orders
let items =[]

// console.log('tableOrds', tableOrders)
// console.log ('orders', data.orders)
  
  for (let i=0; i<orders?.length;i++) {
    orders[i].items?.map(item=> items.push(item))
  }
  // console.log ('items', items)
  //! END SECTION HERE

  return (
    <>
      <Head />
      {edit === true ? (
        <CompEditOrderList orders={orders} items={items} tableOrder={tableOrder}/>
      ) : (
        <CompFinalOrderList />
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
