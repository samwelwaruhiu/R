import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function AddAerobicsExercise() {

  const [newEx, setEx] = useState('');
  const [newUrl, setnewUrl] = useState('');
  const [newInstruction, setInstruction] = useState('');
  const [newTime, setTime] = useState('');

  function handlePost(e){
    e.preventDefault();
    fetch("https://firstondizii.herokuapp.com/exercises",{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body:JSON.stringify({"title" : `${newEx}`, "pic_url" : `${newUrl}`,
        "instructions": `${newInstruction}`,    "time" : `${newTime}`  
      })
})

setEx('');
setnewUrl('')
setInstruction('')
setTime('')

}
 
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
         onChange={(e) => setEx(e.target.value)}
      />
      <TextField
        id="url"
        label="Url of the Image"
        onChange={(e) => setnewUrl(e.target.value)}
      />
       <TextField
        id="description"
        label="Instructions"
        onChange={(e) => setInstruction(e.target.value)}
      />
        <TextField
        id="estimated_time"
        label="Estimated time"
        onChange={(e) => setTime(e.target.value)}
        
      />
      
      <Stack direction="row" spacing={2}>
    <Button variant="contained" onClick={handlePost}>
        Send to Server
      </Button>
    </Stack>

    </Box>

    

    
  );
}

export default AddAerobicsExercise;





