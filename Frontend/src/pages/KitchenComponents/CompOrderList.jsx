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
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);

  const fetchOrders = () => {
    fetch("api/orders/")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const createTbl = () => {
    const newObj = {};
    let count = 1;
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
              <TableCell align="right">
                <CompButtonsKitchen
                  count={count}
                  setToggle={setToggle}
                  toggle={toggle}
                  setUpdate={setUpdate}
                />
              </TableCell>
              <TableCell align="right">
                <CompButtonsService count={count} toggle={toggle} />
              </TableCell>
              <TableCell
                onClick={() => {
                  console.log("clicked");
                }}
              >
                hello
              </TableCell>
            </TableRow>
          );
          count++;
        }
      }
    }
    console.log(newObj);
    setOrders(newObj);
  };

  useEffect(() => {
    fetchOrders();
    setToggle([]);
    let sum = 0;
    for (let counter of Object.values(orders)) {
      sum += counter.length;
    }
    for (let i = 0; i < sum; i++) {
      setToggle((toggle) => [...toggle, false]);
    }
  }, []);

  useEffect(() => {
    if (data) {
      createTbl();
    }
  }, [data, update]);

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
