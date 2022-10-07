import React from "react";
import { Link } from "react-router-dom";


function NavBar(){

  

    return(
   <nav>
   <Link to= '/'>Home</Link>
   <Link to= '/aerobics'>Aerobics</Link>
   <Link to= '/addaerobics'>AddAerobicExercise</Link>
   <Link to= '/about'>AOB</Link>
   </nav>


    )
}

export default NavBar;