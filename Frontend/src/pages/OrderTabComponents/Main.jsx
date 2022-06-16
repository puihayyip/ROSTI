import React from "react";
import styled from "styled-components";
import rawData from "../../data/food";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function FoodCards({ food }) {
  const handleAdd = () => {
    console.log("clicked");
  };
  const handleSeeMore = () => {
    console.log("clicked");
  };

  return (
    <Card sx={{ width: 375, height: 600 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="300"
          image={food.imgURL}
          alt={food.itemName}
        />
        <br />
        <Typography variant="h5">
          {food.itemName} &nbsp;&nbsp;&nbsp;&nbsp;${food.price}
        </Typography>
        <br />
        <Typography variant="body2" align="left">
          {food.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        <Button variant="outlined" onClick={handleAdd}>
          Add to cart
        </Button>
        <Button
          variant="outlined"
          sx={{ padding: "5px 26px", marginLeft: "0px" }}
          onClick={handleSeeMore}
        >
          See more
        </Button>
      </CardActions>
    </Card>
  );
}

function Main({ open, setOpen, selection }) {
  const handleClick = () => {
    setOpen(!open);
  };

  let item;
  switch (selection) {
    case 0:
      item = "Food";
      break;
    case 1:
      item = "Drink";
      break;
    case 2:
      item = "Promo";
      break;
    default:
      break;
  }

  return (
    <div style={{ height: "100vh", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "left", color: "orange", width: "200px" }}>
          {item} Items
        </h1>
        <FastfoodIcon
          fontSize="large"
          color={open ? "inherit" : "primary"}
          onClick={handleClick}
          sx={{
            cursor: "pointer",
            padding: "5px",
            border: open ? "2px black solid" : "2px steelblue solid",
            borderRadius: "50%",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {rawData.map((food, index) => (
          <FoodCards food={food} key={index} />
        ))}
        {/* <FoodCards food={rawData[0]} /> */}
      </div>
    </div>
  );
}

export default Main;
