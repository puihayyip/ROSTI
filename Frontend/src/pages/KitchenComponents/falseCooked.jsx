// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function falseCooked({handleKitchen}){

    return(

    <Button
    variant="contained"
    color="error"
    endIcon={<SendIcon />}
    onClick={handleKitchen}> Completed? </Button>

    )
}