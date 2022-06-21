import {Link} from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CompTableListing ({index,order,handleClick,data}) {
  return (

    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Add in "Time Checked In"
        </Typography>
        <Typography variant="h5" component="div">
        <Link to={`/tablebill/${order?.tblNum}`}> Table {order?.tblNum}</Link>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Add in "Dining Duration"
        </Typography>
        <Typography variant="body2">
          Add in "Party Size"
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>

  );
}