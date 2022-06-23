import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function SideTabAddButton({ handleAddToOrder }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Button
        variant="contained"
        color="warning"
        sx={{ position: "absolute", right: "2rem", marginTop: "1rem" }}
        onClick={handleAddToOrder}
      >
        Add to order
      </Button>
    </Box>
  );
}
