import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

function UserSelection() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`${e.target.id}-login`); //going to individual login page
  };

  return (
    <>
      <H1>Welcome to the Admin Login Page</H1>
      <H1>Which access do you need?</H1>
      <Div>
        <Card onClick={handleClick} id="table">
          <h1 id="table">Table</h1>
          <p id="table">View</p>
        </Card>
        <Card onClick={handleClick} id="kitchen">
          <h1 id="kitchen">Kitchen</h1>
          <p id="kitchen">View</p>
        </Card>
        <Card onClick={handleClick} id="cashier">
          <h1 id="cashier">Cashier</h1>
          <p id="cashier">View</p>
        </Card>
      </Div>
    </>
  );
}

export default UserSelection;
