import React from "react";
import { useNavigate } from "react-router-dom";
import rawData from "../../data/food";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function FoodCards({ food }) {
  const navigate = useNavigate();
  const handleAdd = () => {
    console.log(`hello`);
  };
  const handleSeeMore = () => {
    navigate(`food/${food.itemName}`);
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
        <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
          <Typography variant="h5" align="left">
            {food.itemName}
          </Typography>
          <Typography variant="h5">${food.price}</Typography>
        </div>
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
  let category;
  switch (selection) {
    case 0:
      item = "All";
      break;
    case 1:
      item = "Food";
      category = "food";
      break;
    case 2:
      item = "Drink";
      category = "drinks";
      break;
    case 3:
      item = "Promo";
      category = "promo";
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
      {selection === 0 ? (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {rawData.map((food, index) => (
            <FoodCards food={food} key={index} />
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {rawData
            .filter((food) => food.mainSect === category)
            .map((food, index) => (
              <FoodCards food={food} key={index} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Main;