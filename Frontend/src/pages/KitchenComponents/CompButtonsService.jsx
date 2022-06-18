// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function CompButtonsService({handleService, served}){
    return(<>
     <Button
            variant="contained"
            color="error"
            endIcon={<SendIcon />}
            onClick={handleService}
          >
            Received?
          </Button>
    </>)
}