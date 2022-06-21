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

export default function CompMapTableRow({ item, handleUpdate }) {
  const [edit, setEdit] = useState(false);
  const [qty, setQty] = useState(item.quantities);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  // const handleChangeReq = (event) => {
  //   setQty(event.target.value);
  //   setEdit(!edit);
  // };

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell align="right">${ccyFormat(item.price)}</TableCell>

      <TableCell align="right">
        {/* <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue={item.quantities}
          variant="filled"
          // sx={{ maxHeight: "2px" }}
          // onChange={(event) => setQty(event.target.value) setEdit(!edit)} value={qty}/>
          onChange={handleChangeReq}
          value={qty}
        /> */}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={qty}
          onChange={handleChange}
          helperText="Please select your quantities"
        >
          {quantities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>

      <TableCell align="right">
        ${ccyFormat(item.price * parseInt(item.quantity))}
      </TableCell>
      <TableCell align="right">
        {<EditIcon sx={{ cursor: "pointer" }} onClick={handleUpdate} />}
      </TableCell>
    </TableRow>
  );
}
