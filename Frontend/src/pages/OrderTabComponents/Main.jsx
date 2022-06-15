import React from "react";
import styled from "styled-components";
import FastfoodIcon from "@mui/icons-material/Fastfood";

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
    </div>
  );
}

export default Main;
