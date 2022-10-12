import React, { useEffect, useState } from "react";
import Aerobiccard from "./Aerobiccard";
import Search from "./Search";


function Aerobics(){
 
   const [ex , setEx] = useState([])
   const [search,setSearch] = useState([])

   function forGet(){
    fetch("https://firstondizii.herokuapp.com/exercises")
    .then((resp) => resp.json())
    .then((data) => setEx(data))
    }
   

   function handleDeletion(id){
    setEx(ex.filter(exes => exes.id !== id))
    fetch(`https://firstondizii.herokuapp.com/exercises/${id}`, {method : "DELETE"})
   }

   useEffect(() => {
    (search.length > 0)?( setEx(ex => ex.filter((exp) => exp.title.toLowerCase().includes(search.toLowerCase())))):(forGet())}, [search]
   )

   function handleChange (e){
    setSearch(e.target.value)
   }

 
  return(
        <div>

            
            <h1>The Aerobic Page</h1>
           
            
            <div><Search handleChange={handleChange}/></div>
            
            <div>
                {ex.map(exercises => <Aerobiccard key = {exercises.id} id= {exercises.id} ex={exercises}  handleDeletion={handleDeletion} setEx= {setEx} />)}
            </div>
           
           </div>
    )
}

export default Aerobics;