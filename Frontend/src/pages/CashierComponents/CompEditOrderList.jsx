import { styled } from "@mui/material/styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CompMapEdit from "./CompMapEdit";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";

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

export default function CompEditOrderList({ order, setUpdate }) {
  let { tblNum } = useParams();

  //////////////////
  //? FORMATTING
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  const [SubTotal, setSubTotal] = useState(0);
  const [DiscountAmt, setDiscountAmt] = useState(0);
  const [TaxAmt, setTaxAmt] = useState(0);
  const [TotalAmt, setTotalAmt] = useState(0);
  const DiscountRate = 0.1;
  const TaxRate = 0.07;
  const tabulation = () => {
    //? SUBTOTAL
    const arrayItemSubTotal = [];

    order?.orders?.map((obj) =>
      obj.items.map((item) =>
        arrayItemSubTotal.push(item.quantity * item.price)
      )
    );

    let total = 0;
    for (let price of arrayItemSubTotal) {
      total += price;
    }
    setSubTotal(total);

    //? DISCOUNT
    setDiscountAmt(DiscountRate * total);

    //? TAX
    setTaxAmt((total - DiscountAmt) * TaxRate);

    //? TOTAL
    setTotalAmt(total - DiscountAmt + TaxAmt);
  };

  const ComMapEditArr = [];
  for (let obj of order.orders) {
    for (let item of obj.items) {
      ComMapEditArr.push(
        <CompMapEdit
          item={item}
          orderNum={obj.orderNum}
          tblNum={tblNum}
          setUpdate={setUpdate}
        />
      );
    }
  }

  useEffect(() => {
    tabulation();
  }, [order]);

  // order?.orders?.map((obj, index) =>
  //   obj.items.map((item) => <CompMapEdit item={item} />)
  // )
  // const ComMapEditArr = [];
  // for (let obj of order.orders) {
  //   for (let item of obj.items) {
  //     ComMapEditArr.push(<CompMapEdit item={item} objID={obj._id} />);
  //   }
  // }

  ///////////////////

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
            {ComMapEditArr}
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
