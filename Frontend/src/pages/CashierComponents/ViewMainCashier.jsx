import Head from "../GeneralComponents/MainHeader";
import { useEffect, useState } from "react";
import CompTableListing from "./CompTableListing";
import Box from '@mui/material/Box';


function ViewMainCashier() {
    const [data, setData]= useState([])
    
    useEffect (() => {
        fetch(`/api/orders/`)
          .then((response) => response.json())
          .then((data) => {
            setData(data.data)
          });
      },[]);
      console.log(data)
    return(
        <>
        <Head/>
        <h1>Which Table Bill do you want to see?</h1>
        <Box align="center">
            {data && data?.map((order, index) => <CompTableListing key={index} order ={order} data={data}/>)}
        </Box>


        </>
    )
}
    

export default ViewMainCashier;
