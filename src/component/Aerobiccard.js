import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Aerobiccard({ex, handleDeletion, id}) {
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
        
        <Typography variant="body6" color="text.primary" component="div">
        {ex.time}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={() => handleDeletion(id)}>Delete</Button>
      </CardActions>
    </Card>
    
  );
}

export default Aerobiccard;

