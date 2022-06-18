import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { useState } from "react";
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

const updateDB = (value, setSameUser) => {
  fetch("/api/users/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.data === "Replicated username") {
        setSameUser(true);
      } else {
        setSameUser(false);
      }
    });
};

function AddUsers({ user }) {
  const [error, setError] = useState(false);
  const [authentication, setAuthentication] = useState(null);
  const [sameUser, setSameUser] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = {
      userName: data.get("UserName"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      usercategory: data.get("radio-buttons-group"),
    };
    e.target.reset();

    if (value.userName === "" || value.password === "") {
      setError(true);
    } else {
      setError(false);
      if (value.password === value.confirmPassword) {
        delete value.confirmPassword;
        updateDB(value, setSameUser);
        setAuthentication(true);
      } else {
        setAuthentication(false);
      }
    }
  };

  return (
    <Container>
      <h1>Create new user</h1>
      <form onSubmit={handleLogin}>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">User Category</FormLabel>
          <RadioGroup
            row
            aria-labelledby="radio-buttons-group-label"
            defaultValue="Kitchen"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Kitchen"
              control={<Radio />}
              label="Kitchen"
            />
            <FormControlLabel
              value="Cashier"
              control={<Radio />}
              label="Cashier"
            />
            <FormControlLabel value="Table" control={<Radio />} label="Table" />
          </RadioGroup>
        </FormControl>
        <FlexInput>
          <TextField
            label="User Name"
            name="UserName"
            variant="outlined"
            margin="dense"
            autoFocus
            sx={{ width: "300px" }}
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            margin="dense"
            type="password"
            sx={{ width: "300px" }}
          />
          <TextField
            label="Confirm password"
            name="confirmPassword"
            variant="outlined"
            margin="dense"
            type="password"
            sx={{ width: "300px" }}
          />
        </FlexInput>
        <Button variant="contained" type="submit" sx={{ margin: "20px" }}>
          Login
        </Button>
      </form>
      {error ? (
        <p style={{ color: "red", marginTop: 0 }}>
          *Please fill in all the fields
        </p>
      ) : authentication === false ? (
        <p style={{ color: "red", marginTop: 0 }}>
          *Please key in correct details
        </p>
      ) : sameUser === true ? (
        <p style={{ color: "red", marginTop: 0 }}>*Username has been used</p>
      ) : authentication === true ? (
        <p style={{ color: "green", marginTop: 0 }}>User created!</p>
      ) : (
        ""
      )}
    </Container>
  );
}

export default AddUsers;
