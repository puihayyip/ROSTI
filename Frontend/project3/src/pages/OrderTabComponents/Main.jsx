import React from "react";
import styled from "styled-components";
import FastfoodIcon from "@mui/icons-material/Fastfood";

function Main({ open, setOpen }) {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div style={{ border: "3px solid red", height: "100vh", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "left", color: "orange", width: "200px" }}>
          Food Items
        </h1>
        <FastfoodIcon
          fontSize="large"
          color={open ? "primary" : "inherit"}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Main;
