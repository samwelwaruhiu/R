import React, { useState } from "react";



function Search({onSearch}){

    const [search, setSearch] = useState('')

  function handleChange(e){
    e.preventDefault()
    setSearch(e.target.value)
    onSearch(search)
  }

    return(
    <div class="wrap">
    <div class="search">
    <h6>search engine</h6>
    <input value= {search} type="text" class="searchTerm" placeholder="Type Aerobic Tiltle you looking for?" onChange={handleChange}/>
    </div>
   </div>
       
    )
}

export default Search;