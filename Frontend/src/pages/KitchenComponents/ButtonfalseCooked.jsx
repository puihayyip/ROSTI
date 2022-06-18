import Button from "@mui/material/Button";

export default function falseCooked({handleKitchen}){

    return(

        <Button
        variant="contained"
        color="error"
        onClick={handleKitchen}> Not Done </Button>

    )
}