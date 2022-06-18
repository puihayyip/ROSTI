import Button from "@mui/material/Button";

export default function ButtonfalseCooked({handleService}){

    return(

        <Button
        variant="contained"
        color="error"
        onClick={handleService}> Not Done </Button>

    )
}