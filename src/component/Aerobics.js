import React, { useEffect, useState } from "react";
import Aerobiccard from "./Aerobiccard";


function Aerobics(){


    const [ex , setEx] = useState([])

   useEffect(()=>
   {
    fetch("http://localhost:3000/exercises")
    .then((resp) => resp.json())
    .then((data) => setEx(data))
   }, [])

   


    return(
        <div>
            <h1>The Aerobic Page</h1>
            <div>
                {ex.map(exercises => <Aerobiccard key = {exercises.id} id= {exercises.id} ex={exercises} />)}
            </div>
           

        </div>
    )
}

export default Aerobics;