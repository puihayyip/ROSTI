import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";

const quantities = []; //fields for the drop down menu
for (let i = 0; i <= 10; i++) {
  quantities.push({ value: i, label: i });
}

export default function CompMapTableRow({ item, objID }) {
  const [edit, setEdit] = useState(false);
  const [qty, setQty] = useState(item.quantity);

  const handleChange = (event) => {
    setQty(event.target.value);
    console.log(item);
  };

  const handleUpdate = () => {
    setEdit(!edit);
  };

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell align="right">${ccyFormat(item.price)}</TableCell>

      <TableCell align="right">
        {edit ? (
          <TextField
            id="outlined-select-currency"
            select
            value={qty}
            onChange={handleChange}
            sx={{ maxWidth: "60px", minWidth: "60px" }}
          >
            {quantities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TableCell align="right">{qty} </TableCell>
        )}
      </TableCell>

      <TableCell align="right">${ccyFormat(item.price * qty)}</TableCell>
      <TableCell align="right">
        {<EditIcon sx={{ cursor: "pointer" }} onClick={handleUpdate} />}
      </TableCell>
    </TableRow>
  );
}
