import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";





function Aerobiccard({ex, handleDeletion, id}) {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'red',
    position: 'relative'
  
  };

  return (
    <Card sx={{  display: 'inline-block', mx: '4px', transform: 'scale(0.6)' ,maxWidth: 545 }}>
      <CardMedia
        component="img"
        height="340"
        image= {ex.pic_url}
        alt="exercises"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {ex.title}
        </Typography>
        <Typography variant="body4" color="text.secondary">
        {ex.instructions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ color: 'red'}} size="x-large" onClick={() => handleDeletion(id)}>Delete</Button>
      </CardActions>
      <Link  style={linkStyle} to = {`/aerobics/${ex.title}`}><Stack direction="row" spacing={2}><Button  sx={{ color: 'green'}}style={{maxWidth: '900px', maxHeight: '10px', minWidth: '30px', minHeight: '30px' }} >
        View Exercise
      </Button></Stack></Link>
    </Card>
    
  );
}

export default Aerobiccard;

