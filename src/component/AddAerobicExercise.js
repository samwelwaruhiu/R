import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';;

function AddAerobicsExercise() {
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 12, width: '55ch' },
          }}
        >
          <TextField
            id="outlined-name"
            label="Name of Exercise"
             
          />
          <TextField
            id="url"
            label="Url of the Image"
           
          />
           <TextField
            id="description"
            label="Instructions"
           
          />
            <TextField
            id="estimated_time"
            label="Estimated time"
          
            
          />
          
          <Stack direction="row" spacing={2}>
        <Button variant="contained" >
            Send to Server
          </Button>
        </Stack>
    
        </Box>
    
        
    
        
      );
    }
    
    export default AddAerobicsExercise;