import { styled } from '@mui/material/styles';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function priceRow() {
//   return qty * {item.quantity};
// }

// function createRow() {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// interface Row {
//   desc: string;
//   qty: number;
//   unit: number;
//   price: number;
// }

// function subtotal() {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// // const rows = [
// //   createRow('Paperclips (Box)', 100, 1.15),
// //   createRow('Paper (Case)', 10, 45.99),
// //   createRow('Waste Basket', 2, 17.99),
// // ];


////////////////////////


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
  
  function CompFinalOrderList({order}) {
    // console.log(order)

    const TAX_RATE = 0.07;

    // function ccyFormat(num) {
    //   return `${num.toFixed(2)}`;
    // }
    const x = 5.5 //{item.price}

    // const invoiceItemSubtotal = (item) => x * item.quantity;
    // const invoiceTotalSubtotal=() => {
    //   items.map((item) => (x* item.quantity));
    // } 
    // const invoiceTaxes = TAX_RATE * invoiceTotalSubtotal;
    // const invoiceTotal = invoiceTaxes + invoiceTotalSubtotal;

    return(
    <>
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
          </TableRow>
        </TableHead>
        <TableBody>

          {order?.orders?.map((obj, index) => (
            // console.log(obj)
            obj.items.map((item) =>
              // console.log(item)
            <TableRow key ={index}> 
              <TableCell>{item.foodID}</TableCell>
              <TableCell align="right">{x}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{x * item.quantity}</TableCell>
            </TableRow>
            )
            ))}

          <TableRow>
            <TableCell rowSpan={4} />
            <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
            <TableCell align="right">ccyFormat</TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Discounts</StyledTableCell>
            <TableCell align="right">??</TableCell>
            <TableCell align="right">!!!</TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Tax</StyledTableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">ccyFormat</TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={2}>TOTAL</StyledTableCell>
            <TableCell align="right">ccyFormat</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default CompFinalOrderList