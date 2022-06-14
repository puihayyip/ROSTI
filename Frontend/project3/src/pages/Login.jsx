import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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

function Login({ user }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
    </Container>
  );
}

export default Login;
