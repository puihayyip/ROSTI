import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export default function CompMapTableRow({ item, handleUpdate }) {
  const [edit, setEdit] = useState(false);

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell align="right">${ccyFormat(item.price)}</TableCell>
      <TableCell align="right">{item.quantity} </TableCell>
      <TableCell align="right">
        ${ccyFormat(item.price * item.quantity)}
      </TableCell>
      <TableCell align="right">
        {<EditIcon sx={{ cursor: "pointer" }} onClick={handleUpdate} />}
      </TableCell>
    </TableRow>
  );
}
