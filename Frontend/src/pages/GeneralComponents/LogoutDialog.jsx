import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormDialog({ open, setOpen, user }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

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
          localStorage.removeItem("accessToken");
          // localStorage.removeItem("refreshToken");
          navigate("/");
        } else {
          alert("logout failed");
        }
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    const value = {
      userName: user.username,
      password: password,
      usercategory: user.category,
    };
    fetchUser(value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log Out?</DialogTitle>
        <form action="submit logout" onSubmit={(e) => handleLogout(e)}>
          <DialogContent>
            <DialogContentText>
              Logging out will void orders. To confirm logging out, please key
              in the correct password for user.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="Password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Confirm</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default FormDialog;
