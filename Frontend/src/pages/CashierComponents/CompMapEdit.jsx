import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from 'react'

export default function CompMapTableRow ({item}) {

  const [edit, setEdit] = useState(false);

  const handleChangeReq = (event) => {
    setQty(event.target.value)
    setEdit(!edit)
  }
  
  const [qty, setQty] = useState(item.quantity)
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }
    
    return(
      <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">${ccyFormat(item.price)}</TableCell>
                 
                  <TableCell align="right">
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    defaultValue={item.quantity}
                    variant="filled"
                    // onChange={(event) => setQty(event.target.value) setEdit(!edit)} value={qty}/> 
                    onChange={handleChangeReq} value={qty}/> 
                    </TableCell>

                  <TableCell align="right">
                    ${ccyFormat(item.price * item.quantity)}
                  </TableCell>
                  <TableCell align="right">{<EditIcon />}</TableCell>
        </TableRow>

    )
} 