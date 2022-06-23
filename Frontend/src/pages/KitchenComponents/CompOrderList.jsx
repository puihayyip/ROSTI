import { styled } from "@mui/material/styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CompButtonsService from "./CompButtonsService";
import CompButtonsKitchen from "./CompButtonsKitchen";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
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
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(true);

  const fetchOrders = () => {
    fetch("api/orders/", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const createTbl = () => {
    const newObj = [];
    for (let eachTable of data.data) {
      const tblNum = eachTable.tblNum;
      for (let eachOrder of eachTable.orders) {
        for (let item of eachOrder.items) {
          newObj.push(
            <TableRow sx={{ display: item.foodDone === "off" ? "" : "none" }}>
              {/* <TableRow sx={myStyle}> */}
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{tblNum}</TableCell>
              <TableCell align="right">
                <CompButtonsKitchen
                  item={item}
                  orderNum={eachOrder.orderNum}
                  tblNum={tblNum}
                  setUpdate={setUpdate}
                />
              </TableCell>
              <TableCell align="right">
                <CompButtonsService
                  item={item}
                  orderNum={eachOrder.orderNum}
                  tblNum={tblNum}
                  setUpdate={setUpdate}
                />
              </TableCell>
              <TableCell
                align="right"
                onClick={() => {
                  if (item.foodSent === "on") {
                    fetch(`/api/orders/edit/${tblNum}`, {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      body: JSON.stringify({
                        edit: "on",
                        orderNum: eachOrder.orderNum,
                        itemID: item._id,
                        field: "foodDone",
                      }),
                    });
                    setUpdate(!update);
                  }
                }}
              >
                <Button
                  disabled={item.foodSent === "on" ? false : true}
                  variant="contained"
                  color="primary"
                  endIcon={<DeleteIcon />}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          );
        }
      }
    }
    setOrders(newObj);
  };

  useEffect(() => {
    fetchOrders();
  }, [update]);

  useEffect(() => {
    if (data) {
      createTbl();
    }
  }, [data]);

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
              <StyledTableCell align="right">Remove Item</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Object.values(orders).map((order) => order)}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
