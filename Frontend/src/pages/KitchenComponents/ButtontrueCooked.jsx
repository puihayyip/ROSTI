import Button from "@mui/material/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ButtontrueCooked({handleKitchen}){

    return(

    <Button
    variant="contained"
    color="success"
    endIcon={<CheckCircleIcon />}
    onClick={handleKitchen}> Done </Button>

    )
}