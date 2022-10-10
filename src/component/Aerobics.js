import React, { useEffect, useState } from "react";
import Aerobiccard from "./Aerobiccard";
import Search from "./Search";


function Aerobics(){
 
   const [ex , setEx] = useState([])

   useEffect(()=>
   {
    fetch("https://firstondizii.herokuapp.com/exercises")
    .then((resp) => resp.json())
    .then((data) => setEx(data))
    alert("May take some time to Load..Please Wait")
   }, [])

   function handleDeletion(id){
    setEx(ex.filter(exes => exes.id !== id))
    fetch(`https://firstondizii.herokuapp.com/exercises/${id}`, {method : "DELETE"})
   }

   function handleSearch(search){
    setEx(ex => ex.filter(exx => exx.title.toLowerCase().includes(search.toLowerCase())))
   }

  return(
        <div>

            
            <h1>The Aerobic Page</h1>
           
            
            <div><Search onSearch={handleSearch}/></div>
            
            <div>
                {ex.map(exercises => <Aerobiccard key = {exercises.id} id= {exercises.id} ex={exercises}  handleDeletion={handleDeletion} setEx= {setEx} />)}
            </div>
           </div>
    )
}

export default Aerobics;