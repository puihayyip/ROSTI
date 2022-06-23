import Head from "../GeneralComponents/MainHeader";
import { useEffect, useState } from "react";
// import CompTableListing from "./CompTableListing";
import Box from "@mui/material/Box";
import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 3,
        m: 2,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#FFFFF",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "#161616",
        border: "3px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "#fcd303",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function ViewMainCashier({ user }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // const [LineItems, setLineItems] =useState([])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (!localStorage.getItem("accessToken")) return navigate("/");

    fetch(`/api/orders/`, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (res.status === 403) return navigate("/");
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      });
  }, []);

  //! BREAKDOWN DATA
  let tableOrders = data;
  let orders = [];
  let items = [];

  // console.log('tableOrds', tableOrders)

  for (let i = 0; i < data.length; i++) {
    data[i].orders.map((items) => orders.push(items));
  }
  // console.log ('orders', orders)

  for (let i = 0; i < orders.length; i++) {
    orders[i].items.map((item) => items.push(item));
  }
  // console.log ('items', items)
  //! END SECTION HERE

  return (
    <>
      <Head user={user} />
      <h3> Welcome to the Cashier Summary View </h3>
      <h1>Which Table Bill do you want to see?</h1>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          {tableOrders.map((tab, index) => (
            // {data &&
            //   data?.map((order, index) => (
            // <CompTableListing key={index} order={order} data={data} />

            // <CompTableListing tableOrders={tableOrders} orders={orders} items={items} data={data} tab ={tab} key={index}/>
            <Item>
              <Typography variant="h5" component="div">
                <Link to={`/tablebill/${tab.tblNum}`}> Table {tab.tblNum}</Link>
              </Typography>
            </Item>
          ))}
        </Box>
      </div>
    </>
  );
}

export default ViewMainCashier;
