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

export default function CompMapTableRow({ item, orderNum, tblNum, setUpdate }) {
  const [edit, setEdit] = useState(false);
  const [qty, setQty] = useState(item.quantity);

  const handleChange = (event) => {
    setQty(event.target.value);
    fetch(`/api/orders/edit/${tblNum}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        edit: event.target.value,
        orderNum: orderNum,
        itemID: item._id,
      }),
    });
  };

  const handleUpdate = () => {
    setEdit(!edit);
    setUpdate((update) => !update);
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
          <p>{qty}</p>
        )}
      </TableCell>

      <TableCell align="right">${ccyFormat(item.price * qty)}</TableCell>
      <TableCell align="right">
        {edit === true ? (
          <EditIcon
            sx={{ cursor: "pointer" }}
            color="error"
            onClick={handleUpdate}
          />
        ) : (
          <EditIcon sx={{ cursor: "pointer" }} onClick={handleUpdate} />
        )}
      </TableCell>
    </TableRow>
  );
}
