import React from "react";
import { BrowserRouter, Link, Route, Router } from "react-router-dom";

const Navabar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-large navbar-dark bg-dark py-2">
               
              
            <Link to="/" className="navbar-brand ml-5">React Redux Contact App</Link>
            

          
            
            </nav>
        </div>
    )
}

export default Navabar;