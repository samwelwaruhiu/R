import React from "react";



function Search({handleChange}){

  

    return(
    <div class="wrap">
    <div class="search">
    <h6>search engine</h6>
    <input type="text" class="searchTerm" placeholder="Type Aerobic Tiltle you looking for?" onChange={handleChange}/>
    </div>
   </div>
       
    )
}

export default Search;