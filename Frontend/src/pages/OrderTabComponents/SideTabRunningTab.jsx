import {useEffect, useState} from 'react'
export default function SideTabRunningTab ({user}) {

    const [tab, setTab] = useState({})
    
    useEffect(()=> {
    fetch (`api/orders/${user?.username}`)
    .then((response) => response.json())
    .then((data) => {
      setTab(data.data);
    });
}, [])

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
console.log ('items', items)

//! END SECTION HERE

    return(<>

    <h4> Running Tab</h4>
        {
            items.map((item, index)=> 
            <p key={index}> {item.name} - {item.quantity}</p>)
           
        }

    </>)
}