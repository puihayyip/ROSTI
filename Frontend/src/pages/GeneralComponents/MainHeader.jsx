import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LogoutDialog from "./LogoutDialog";
import { useState } from "react";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#fcd303",
    },
  },
});

export default function Head({ user }) {
  const [open, setOpen] = useState(false);

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
            {window.location.href.slice(window.location.href.length - 1) ===
            "/" ? (
              ""
            ) : (
              <Button
                sx={{
                  marginRight: "20px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "white",
                  border: "1px white solid",
                }}
                onClick={() => setOpen(true)}
              >
                Logout
              </Button>
            )}
            {open ? (
              <LogoutDialog open={open} setOpen={setOpen} user={user} />
            ) : (
              ""
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
