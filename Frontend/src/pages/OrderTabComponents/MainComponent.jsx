import React from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";

function FoodCards({ food, cart, setCart, setOpen, open }) {
  const navigate = useNavigate();

  useEffect(() => {
    $(`#${food.foodID}`).on("click", function () {
      let imgtodrag = $(`#${food.foodID}cardImg`);

      const imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top + 100,
          left: imgtodrag.offset().left,
        })
        .css({
          opacity: "0.8",
          position: "absolute",
          height: "120px",
          width: "120px",
          "z-index": "100",
        })
        .appendTo($("body"))
        .animate(
          {
            top: $(".shoppingCart").offset().top + 20,
            left: $(".shoppingCart").offset().left + 30,
            width: 50,
            height: 50,
          },
          1000
        );

      imgclone.animate(
        {
          width: 0,
          height: 0,
        },
        function () {
          $(this).detach();
        }
      );
    });
  }, []);

  const handleAdd = () => {
    setOpen(true);
    const index = cart.findIndex((item) => item.food.name === food.name);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].qty = cart[index].qty + 1;
      setCart(newCart);
    } else {
      setCart([...cart, { food: food, qty: 1 }]);
    }
  };

  const handleSeeMore = () => {
    navigate(`food/${food._id}`);
  };

  return (
    <Card
      sx={{
        width: 360,
        height: 480,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="240"
          image={food.img}
          alt={food.name}
          id={food.foodID + "cardImg"}
        />
        <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
          <Typography variant="h6" align="left">
            <b>{food.name}</b>
          </Typography>
          <Typography variant="h6">${food.price}</Typography>
        </div>
        <br />
        <Typography variant="body2" align="left">
          <i>{food.des}</i>
        </Typography>
      </CardContent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          marginBottom: "1rem",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={(e) => handleAdd(e)}
          id={food.foodID}
          style={{
            maxWidth: "140px",
            minWidth: "140px",
          }}
        >
          Add Order
        </Button>
        <Button
          variant="outlined"
          sx={{ padding: "5px 26px" }}
          onClick={handleSeeMore}
          style={{
            maxWidth: "140px",
            minWidth: "140px",
          }}
        >
          See more
        </Button>
      </div>
    </Card>
  );
}

function Main({ open, setOpen, selection, cart, setCart }) {
  const [allFood, setAllFood] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };

  const fetchData = async () => {
    fetch("/api/allfood", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (res.status === 403) return navigate("/");
        return res.json();
      })
      .then((data) => setAllFood(data));
    console.log("fetching");
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    //!MAIN BODY WIDTH
    <div style={{ height: "100vh", padding: "20px" }}>
      {/* //!BODY HEADER */}
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
          className="shoppingCart"
        />
      </div>
      {selection === 0 ? (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {allFood
            .filter(
              (food) => food.mainSect === "food" || food.mainSect === "drinks"
            )
            .map((food, index) => (
              <FoodCards
                food={food}
                key={index}
                cart={cart}
                setCart={setCart}
                setOpen={setOpen}
                open={open}
              />
            ))}
        </div>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {allFood
            .filter((food) => food.mainSect === category)
            .map((food, index) => (
              <FoodCards
                food={food}
                key={index}
                cart={cart}
                setCart={setCart}
                setOpen={setOpen}
                open={open}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Main;
