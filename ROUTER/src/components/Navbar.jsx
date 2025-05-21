import React from "react";

import {createBrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar=()=>{
   

    return(
        <>
        <div className="">
            <nav>
            <Link to="/"><li>Home</li></Link>
            <Link to="/login"><li>Login</li></Link>
            {/* <Link to="/user"><li>User</li></Link> */}
            </nav>
        </div>
        
        </>
    )
}
export default Navbar;