import Head from "../Head"
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
export default function TableFinalBill() {
  return (
    <>
    <Head/>
    <h1> Receipt </h1>
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
          {/* {rows.map((row) => ( */}
            <TableRow >
              <TableCell>Yummy Pizza</TableCell>
              <TableCell align="right">$18</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">$36</TableCell>
            </TableRow>

          <TableRow>
            <TableCell rowSpan={4} />
            <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
            <TableCell align="right">$100</TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Discounts</StyledTableCell>
            <TableCell align="right">OCBC 20% off</TableCell>
            <TableCell align="right">$20</TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Tax</StyledTableCell>
            <TableCell align="right">7%</TableCell>
            <TableCell align="right">$7</TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell colSpan={2}>TOTAL</StyledTableCell>
            <TableCell align="right">$107</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    <h2> Thank you for visiting our restaurant.</h2>
    <h3> See you again soon.</h3>
    </>
  );
}