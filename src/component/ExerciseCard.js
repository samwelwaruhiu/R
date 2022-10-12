import React, { useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function ExerciseCard() {
   
  const [exx , setExx] = useState([])

  useEffect(()=> {
    fetch("https://firstondizii.herokuapp.com/exercises")
    .then((resp) => resp.json())
    .then((data) => setExx(data))
  })

  const {title} = useParams();

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'red',
    position: 'relative',
    
  
  };

  return (
    <div style={{ display:'flex', justifyContent:'center' }}>
        {exx.filter(c => c.title === title).map(e => (
          <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="540"
          image={e.pic_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {e.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {e.instructions}
          </Typography>
        </CardContent>
        <Link  style={linkStyle} to = {'/aerobics'}> <Stack direction="row" spacing={2}><Button style={{maxWidth: '900px', maxHeight: '10px', minWidth: '30px', minHeight: '30px' }} >
        Go To Aerobic Back Page
      </Button></Stack></Link>
      </CardActionArea>
    </Card>
        ))}
        </div>
    
  );
}
