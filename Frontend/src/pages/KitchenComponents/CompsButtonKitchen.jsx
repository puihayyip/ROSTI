// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";


export default function CompButtonsKitchen({handleKitchen, cooked}){

    const falseCooked = 

    <Button
    variant="contained"
    color="error"
    endIcon={<SendIcon />}
    onClick={handleKitchen}> Completed? </Button>

    const trueCooked =

    <Button
    variant="contained"
    color="success"> Done </Button>

    return(
    <>
    {cooked=== true? <trueCooked/> : <falseCooked />}
    </>
    )
}