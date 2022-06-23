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

// console.log(`${user?.username}`)
// console.log(tab, 'tab')

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
          color: "dark gray",
          backgroundColor:"lightgrey"

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
                </tr>
            </thead>
            <tbody>
            {items?.map((item, index) => (
                <tr>
                    <td colSpan={2}>{item?.name}</td>
                    <td>{item?.quantity}</td>
                                    </tr>
            ))}

          </tbody>
</table>
</div>
    )
    :
    null
}
</>)
}
