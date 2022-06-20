import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LogoutDialog from "../GeneralComponents/LogoutDialog";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#fcd303",
    },
  },
});

export default function Head({ selection, setSelection, user }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setSelection(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="neutral" sx={{ height: 150 }}>
          <Toolbar sx={{ marginTop: "auto", marginBottom: "auto" }}>
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left", fontWeight: "bold" }}
              color="white"
            >
              MENU
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
              color="white"
            >
              Order Tab
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, textAlign: "right" }}
              color="white"
            >
              Table Number: {user.username}
            </Typography>
          </Toolbar>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Tabs
              value={selection}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="All" sx={{ fontWeight: "bold", color: "white" }} />
              <Tab label="Food" sx={{ fontWeight: "bold", color: "white" }} />
              <Tab label="Drinks" sx={{ fontWeight: "bold", color: "white" }} />
            </Tabs>
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
            {open ? (
              <LogoutDialog
                open={open}
                setOpen={setOpen}
                navigate={navigate}
                user={user}
              />
            ) : (
              ""
            )}
          </div>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
