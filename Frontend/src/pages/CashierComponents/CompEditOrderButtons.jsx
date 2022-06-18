import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function CompEditOrderButtons({handleConfirm}){
    return(

<Box m={1} display="flex" justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2}>

          <Button
            variant="contained"
            color="success"
            onClick={handleConfirm}
          >
            Confirm Bill
          </Button>
        </Stack>
      </Box>
    )
}
export default CompEditOrderButtons