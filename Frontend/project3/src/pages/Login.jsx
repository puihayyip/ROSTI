import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 100px auto 0 auto;
  width: 50vw;
  border: 1px black dashed;
`;
const FlexInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Login({ user }) {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Loggin");
  };

  return (
    <Container>
      <h1>{user} Login</h1>
      <form onSubmit={handleLogin} style={{ padding: "10px" }}>
        <FlexInput>
          <TextField
            id="outlined-required"
            label="User Name"
            variant="outlined"
            margin="dense"
            sx={{ width: "300px" }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            variant="outlined"
            type="password"
            margin="dense"
            sx={{ width: "300px" }}
          />
        </FlexInput>
        <Button variant="contained" type="submit" sx={{ margin: "20px" }}>
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login;
