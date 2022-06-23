import { useEffect, useState } from "react";
export default function SideTabRunningTab({user}) {

  //! FETCH CURRENT TAB ITEMS
  const [tab, setTab] = useState({});

useEffect(() => {
  fetch(`api/orders/${user?.username}`)
    .then((response) => response.json())
    .then((data) => {
      setTab(data.data);
    });
}, []);


//! BREAKDOWN DATA
let data = tab;
let orders = data?.orders;
let items = [];

// console.log ('data', data.orders)
// console.log ('orders', orders)

for (let i = 0; i < orders?.length; i++) {
  orders[i].items?.map((item) => items.push(item));
}
console.log("items", items);

  //? SUBTOTAL
  const arrayItemSubTotal = [];

    items?.map((item) => arrayItemSubTotal.push(item.quantity * item.price))

  let SubTotal = 0;
  for (let i = 0; i < arrayItemSubTotal.length; i++) {
    SubTotal = SubTotal + arrayItemSubTotal[i];
    // console.log(SubTotal)
  }

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

//! END SECTION HERE

  return (
<>
    {items.length > 0 ? 
    (
        <div
      style={{
          paddingTop: "5px",
          alignItems: "center",
          fontStyle:"italic",
          color: "gray",
        }}
    >
     
        <h3 style={{fontWeight: "bold" }}>Current Tab:</h3>
     
        <table
        style={{
             marginLeft:"auto",
             marginRight:"auto",
            fontSize:"small",
            tableLayout:"fixed",
                    }}>
            <thead
            style={{
                color: "dark gray",
                }}>
                <tr>
                    <th><u>Item</u> </th>
                    <th></th>
                    <th><u>Qty</u></th>
                    <th><u>Item Total</u></th>
                </tr>
            </thead>
            <tbody>
            {items?.map((item, index) => (
                <tr>
                    <td colSpan={2}>{item?.name}</td>
                    <td>{item?.quantity}</td>
                    <td>${ccyFormat(item.price * item.quantity)}</td>
                                    </tr>
            ))}
            <tr style={{
                height:"10px"
                }}>
            </tr>
            <tr>
              <td colSpan={3}><b>Running Sub-Total:</b></td>
              <td>${ccyFormat(SubTotal)}</td>
            </tr>

          </tbody>
</table>
</div>
    )
    :
    null
}
</>)
}
