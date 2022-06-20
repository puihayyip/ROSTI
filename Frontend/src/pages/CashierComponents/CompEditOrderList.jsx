import { styled } from '@mui/material/styles';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const handleDelete =() => {
    console.log("delete it NOWWWW")
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: 'bold' 
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      fontWeight: 'bold' 
    },
  }));

function CompEditOrderList({handleEdit}) {

  const [order, setOrder]=useState(0)
  let {tblNum} = useParams();

  useEffect (() => {
    fetch(`/api/orders/${tblNum}`)
      .then((response) => response.json())
      .then((data) => {
        setOrder(data.data)
      });
  },[tblNum]);

  // console.log(order)

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  const x = 5.5; //{item.price}

  //? SUBTOTAL
  const arrayItemSubTotal = [];

  order?.orders?.map((obj, index) =>
    obj.items.map((item) => arrayItemSubTotal.push(item.quantity * x))
  );

  let SubTotal=0
  for (let i=0; i<arrayItemSubTotal.length; i++) {
     SubTotal = SubTotal + arrayItemSubTotal[i] 
  }

  //? DISCOUNT
  let DiscountRate = 0.1
  let DiscountAmt = DiscountRate * SubTotal

  //? TAX
  let TaxRate = 0.07;
  let TaxAmt= (SubTotal - DiscountAmt)*TaxRate

  //? TOTAL
  let TotalAmt = SubTotal - DiscountAmt + TaxAmt

    return(
    <>
          <h1> Please Confirm Bill </h1>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, maxWidth: 900 }} align="center" aria-label="spanning table">
        <TableHead>
          <TableRow>
            {/* <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell> */}
          </TableRow>
          <TableRow>
            <StyledTableCell>Item Name</StyledTableCell>
            <StyledTableCell align="right">Item Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Sub-total</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
       
          {order?.orders?.map((obj, index) =>
              // console.log(obj)
              obj.items.map((item) => (
                // console.log(item)
                <TableRow key={index}>
                  <TableCell>{item.foodID}</TableCell>
                  <TableCell align="right">${ccyFormat(x)}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">${ccyFormat(x * item.quantity)}</TableCell>
                  <TableCell align="right" onClick={handleEdit}>{<EditIcon />}</TableCell>
                  <TableCell align="right" onClick={handleDelete}>{<DeleteIcon />}</TableCell>
                </TableRow>
              ))
            )}
  
  <TableRow>
              <TableCell rowSpan={4} />
              <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
              <TableCell align="right">${ccyFormat(SubTotal)}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>Discounts</StyledTableCell>
              <TableCell align="right">{`${(DiscountRate*100).toFixed(0)}%`}</TableCell>
              <TableCell align="right">${ccyFormat(DiscountAmt)}</TableCell>
              <TableCell align="right" onClick={handleEdit}>{<EditIcon />}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>Tax</StyledTableCell>
              <TableCell align="right">{`${(TaxRate * 100).toFixed(0)}%`}</TableCell>
              <TableCell align="right">${ccyFormat(TaxAmt)}</TableCell>
              <TableCell align="right" onClick={handleEdit}>{<EditIcon />}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell colSpan={2}>TOTAL</StyledTableCell>
              <TableCell align="right">${ccyFormat(TotalAmt)}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default CompEditOrderList