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

export default function CompOrderList() {
  const [orders, setOrders] = useState({});
  const [toggle, setToggle] = useState([]);

  const fetchOrders = () => {
    fetch("api/orders/")
      .then((res) => res.json())
      .then((data) => {
        const newObj = {};
        let count = 1;
        for (let eachTable of data.data) {
          const tblNum = eachTable.tblNum;
          newObj[tblNum] = [];
          for (let eachOrder of eachTable.orders) {
            for (let item of eachOrder.items) {
              setToggle((toggle) => [...toggle, false]);

              newObj[tblNum].push(
                <TableRow>
                  <TableCell>{count}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{tblNum}</TableCell>
                  <TableCell align="right">hello</TableCell>
                  <TableCell align="right">
                    <CompButtonsKitchen
                      count={count}
                      setToggle={setToggle}
                      toggle={toggle}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <CompButtonsService count={count} toggle={toggle} />
                  </TableCell>
                </TableRow>
              );
              count++;
            }
          }
        }
        setOrders(newObj);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

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
              <StyledTableCell>Order no</StyledTableCell>
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
