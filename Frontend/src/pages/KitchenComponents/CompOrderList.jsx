import { styled } from "@mui/material/styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import CompButtonsKitchen from './CompButtonsKitchen';
import CompButtonsService from "./CompButtonsService";
import CompButtonsKitchen from "./CompButtonsKitchen";
import { useState, useEffect } from "react";

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

export default function CompOrderList({ order }) {
  const [cooked, SetCooked] = useState(false);
  const [served, SetServed] = useState(false);
  const [orders, setOrders] = useState({});

  const handleKitchen = () => {
    console.log("Kitchen completed this dish");
    SetCooked(!cooked);
  };

  const handleService = () => {
    console.log("Dish has been served to table");
    SetServed(!served);
  };

  const fetchOrders = () => {
    fetch("api/orders/")
      .then((res) => res.json())
      .then((data) => {
        const newObj = {};
        for (let eachTable of data.data) {
          const tblNum = eachTable.tblNum;
          newObj[tblNum] = [];
          for (let eachOrder of eachTable.orders) {
            for (let item of eachOrder.items) {
              newObj[tblNum].push(
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{tblNum}</TableCell>
                  <TableCell align="right">Hide ring </TableCell>
                  <TableCell align="right">
                    {" "}
                    <CompButtonsKitchen
                      handleKitchen={handleKitchen}
                      cooked={cooked}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <CompButtonsService
                      handleService={handleService}
                      cooked={cooked}
                      served={served}
                    />{" "}
                  </TableCell>
                </TableRow>
              );
            }
          }
        }
        setOrders(newObj);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <h1> Kitchen View: Next Items </h1>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, maxWidth: 900 }}
          align="center"
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow></TableRow>
            <TableRow>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Table No.</StyledTableCell>
              <StyledTableCell align="right">Remarks</StyledTableCell>
              <StyledTableCell align="right">Kitchen Send</StyledTableCell>
              <StyledTableCell align="right">Table Receive</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Object.values(orders).map((order) => order)}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
