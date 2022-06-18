import Button from "@mui/material/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ButtontrueServed({handleService}){

    return(

    <Button
    variant="contained"
    color="success"
    endIcon={<CheckCircleIcon />}
    onClick={handleService}> Done </Button>

    )
}