import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from '@mui/material/TextField';


export default function CompMapTableRow ({item, handleUpdate}) {

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }
    
    const x = 5.5; //{item.price}
    
    return(
        <TableRow>
                  <TableCell>{item.foodID}</TableCell>
                  <TableCell align="right">${ccyFormat(x)}</TableCell>
                 
                  <TableCell align="right">
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    defaultValue={item.quantity}
                    variant="filled"
                    onChange ={handleUpdate}
                  /> </TableCell>

                  <TableCell align="right">
                    ${ccyFormat(x * item.quantity)}
                  </TableCell>

        </TableRow>

    )
} 