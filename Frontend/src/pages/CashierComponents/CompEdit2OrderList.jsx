import { styled } from "@mui/material/styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompMapTableRow from "./CompMapTableRow";
import CompMapEdit from "./CompMapEdit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: "bold",
  },
}));

function CompEdit2OrderList({ order }) {
  let { tblNum } = useParams();

  const [edit, setEdit] = useState(false);

  const [update, setUpdate] = useState({});

  const handleUpdate = (event) => {
    console.log("e", event.target.value);

    fetch(`/api/orders/${tblNum}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...order, order }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdate(data); // replaceHoliday(data.data);
      });
  };

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  //? SUBTOTAL
  const arrayItemSubTotal = [];

  order?.orders?.map((obj, index) =>
    obj.items.map((item) => arrayItemSubTotal.push(item.quantity * item.price))
  );

  let SubTotal = 0;
  for (let i = 0; i < arrayItemSubTotal.length; i++) {
    SubTotal = SubTotal + arrayItemSubTotal[i];
  }

  //? DISCOUNT
  let DiscountRate = 0.1;
  let DiscountAmt = DiscountRate * SubTotal;

  //? TAX
  let TaxRate = 0.07;
  let TaxAmt = (SubTotal - DiscountAmt) * TaxRate;

  //? TOTAL
  let TotalAmt = SubTotal - DiscountAmt + TaxAmt;

  return (
    <>
      <h1> Please Confirm Bill </h1>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, maxWidth: 900 }}
          align="center"
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="right">Item Price</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Sub-total</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {order?.orders?.map((obj, index) =>
              // console.log(obj)
              obj.items.map((item) => (
                // console.log(item)

                (edit === true)? <CompMapEdit handleUpdate={handleUpdate} item={item} />:<CompMapTableRow handleUpdate={handleUpdate} item={item} />

              ))
            )}

            <TableRow>
              <TableCell rowSpan={4} />
              <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
              <TableCell align="right">${ccyFormat(SubTotal)}</TableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>Discounts</StyledTableCell>
              <TableCell align="right">{`${(DiscountRate * 100).toFixed(
                0
              )}%`}</TableCell>
              <TableCell align="right">${ccyFormat(DiscountAmt)}</TableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>Tax</StyledTableCell>
              <TableCell align="right">{`${(TaxRate * 100).toFixed(
                0
              )}%`}</TableCell>
              <TableCell align="right">${ccyFormat(TaxAmt)}</TableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell colSpan={2}>TOTAL</StyledTableCell>
              <TableCell align="right">${ccyFormat(TotalAmt)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default CompEdit2OrderList;
