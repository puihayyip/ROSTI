import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function CompFinalOrderButtons({handleEdit, handlePayment}){
    return(
<Box m={1} display="flex" justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="error" onClick= {handleEdit}>
            Edit Bill
          </Button>

          <Button
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
            onClick={handlePayment}
          >
            Proceed to Payment
          </Button>
        </Stack>
      </Box>
    )
}
export default CompFinalOrderButtons