import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#fcd303",
    },
  },
});

export default function Head() {
  const [log, setLog] = useState(false); //To be fetched using JWT or sessions
  const user = "Table 100"; //To be fetched

  const handleLogin = () => {
    console.log("Logging in ~");
    setLog(!log);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="neutral" sx={{ height: 100 }}>
          <Toolbar sx={{ marginTop: "auto", marginBottom: "auto" }}>
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left", fontWeight: "bold" }}
              color="white"
            >
              ROSTI
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left" }}
              color="white"
            >
              {user === null ? "" : user}
            </Typography>
            <Button color="inherit" onClick={handleLogin}>
              <Typography component="div" sx={{ flexGrow: 1 }} color="white">
                {user ? (log ? "Logout" : "Login") : ""}
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
