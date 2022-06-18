import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Button from "@mui/material/Button";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [error, setError] = useState(false);
  const [authentication, setAuthentication] = useState(null);
  const navigate = useNavigate();
  const [errText, setErrText] = useState("");

  const fetchUser = (value) => {
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          switch (data.data.usercategory) {
            case "Table":
              navigate("/menu");
              break;
            case "Kitchen":
              navigate("/kitchen");
              break;
            case "Cashier":
              navigate("/cashier");
              break;
            default:
              return;
          }
        } else {
          setErrText("*" + data.data);
          setAuthentication(false);
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = {
      userName: data.get("UserName"),
      password: data.get("Password"),
      usercategory: user,
    };
    e.target.reset();

    if (value.userName === "" || value.password === "") {
      setError(true);
    } else {
      setError(false);
      fetchUser(value);
    }
  };

  return (
    <Container>
      <h1>{user} Login</h1>
      <form onSubmit={handleLogin}>
        <FlexInput>
          <TextField
            id="outlined-required"
            label="User Name"
            name="UserName"
            variant="outlined"
            margin="dense"
            autoFocus
            sx={{ width: "300px" }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            name="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            margin="dense"
            sx={{ width: "300px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
        <p style={{ color: "red", marginTop: 0 }}>{errText}</p>
      ) : (
        ""
      )}
    </Container>
  );
}

export default Login;

/** * visibility code answer from
https://stackoverflow.com/questions/60391113/how-to-view-password-from-material-ui-textfield
*/
