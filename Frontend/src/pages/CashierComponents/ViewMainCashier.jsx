import Head from "../GeneralComponents/MainHeader";
import { useEffect, useState } from "react";
import CompTableListing from "./CompTableListing";

//   const item = data ?? {} ;

const handleClick = () => {
   console.log('moving to next page')
}

function ViewMainCashier() {
    const [data, setData]= useState(0)
    
    useEffect (() => {
        fetch(`/api/orders/`)
          .then((response) => response.json())
          .then((data) => {
            setData(data)
          });
      },[]);
    //   console.log(data?.[0]?.tblNum)
    return(
        <>
        <Head/>
        <h1>Which Table Bill do you want to see?</h1>
        <ul>
            {data && data?.map((order, index) => <CompTableListing key={index} order ={order} handleClick={handleClick} data={data}/>)}
        </ul>


        </>
    )
}
    

export default ViewMainCashier;
