import Head from "../Head";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CompFinalOrderList from "./CompFinalOrderList";
import CompEditOrderList from "./CompEditOrderList";

const handleEdit = () => {
    console.log ("Time to Edit EVERYTHING!!!")
}

const handlePayment = () => {
    console.log ("MAKE A LOT OF MONEY!!!")
}

export default function TablePreviewBill() {
  return (
    <>
      <Head />
      {/* <CompFinalOrderList/> */}
      <CompEditOrderList handleEdit={handleEdit}/>
      <Box m={1} display="flex" justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="error" onClick= {handleEdit}>
            Edit Bill
          </Button>
          <Button variant="contained" color="success" endIcon={<SendIcon />} onClick={handlePayment}>
            Proceed to Payment
          </Button>
        </Stack>
      </Box>
    </>
  );
}
