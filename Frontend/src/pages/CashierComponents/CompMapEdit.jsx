import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from 'react'

export default function CompMapTableRow ({item, index}) {
  const [editInp, setEditInp] = useState(false);
  const [num, setNum] = useState(-1);
  const [qty, setQty] = useState(item.quantity)


  const handleEditLine= (event, item) => {
    setEditInp(!editInp)
    setNum(item._id)
  }

  const handleChangeReq=(event)=>{
    console.log("e", event)
  }

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }
    
    return(
       editInp === true ? (
        <TableRow>
        <TableCell>{item.name}</TableCell>
        <TableCell align="right">${ccyFormat(item.price)}</TableCell>
        <TableCell align="right">
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue={item.quantity}
          variant="filled"
          // onChange={(event) => (setQty(event.target.value) setEdit(!edit) value={qty})} 
        onChange={handleChangeReq} value={qty}/>
          </TableCell>

        <TableCell align="right">
          ${ccyFormat(item.price * item.quantity)}
        </TableCell>
        <TableCell align="right">{<EditIcon />}</TableCell>
</TableRow>
       ) : (
        <TableRow key={index}>
      <TableCell>{item.name}</TableCell>
      <TableCell align="right">${ccyFormat(item.price)}</TableCell>
      <TableCell align="right">{item.quantity}</TableCell>
      <TableCell align="right">
        ${ccyFormat(item.price * item.quantity)}
      </TableCell>
      <TableCell align="right" onClick={handleEditLine}>{<EditIcon />}</TableCell>
</TableRow>
))}