import Head from "./Head";

import React, { useState } from "react";
import $ from "jquery";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";

const H1 = styled.h1`
  color: orange;
  margin-top: 3rem;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
`;
const Card = styled.div`
  border: 2px solid orange;
  border-radius: 20px;
  cursor: pointer;
  padding: 0 50px 0 50px;
`;

function UserSelection({ user, setUser }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    setUser(e.target.id);
    $(`.card`).css("backgroundColor", "white");
    $(`div#${e.target.id}`).css("backgroundColor", "lightGray");
    navigate(`login`);
  };

  return (
    <>
      <Head />
      <H1>Welcome to the Admin Login Page</H1>
      <H1>Which access do you need?</H1>
      <Div>
        <Card onClick={handleClick} id="Table" className="card">
          <h1 id="Table">Table</h1>
          <p id="Table">View</p>
        </Card>
        <Card onClick={handleClick} id="Kitchen" className="card">
          <h1 id="Kitchen">Kitchen</h1>
          <p id="Kitchen">View</p>
        </Card>
        <Card onClick={handleClick} id="Cashier" className="card">
          <h1 id="Cashier">Cashier</h1>
          <p id="Cashier">View</p>
        </Card>
      </Div>
      <Outlet />
      <Button
        variant="outlined"
        sx={{ marginTop: "25vh", marginLeft: "85vw" }}
        onClick={() => navigate("/users/new")}
      >
        Add new users
      </Button>
    </>
  );
}

export default UserSelection;
