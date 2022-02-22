import React from "react";
import { Link } from "react-router-dom";

let NavBar=()=>
{
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                     <i class="fa-brands fa-facebook-f text-primary px-2"></i>Contact-Manger
                     </Link>
                </div>
            </nav>
        </React.Fragment>
    )

}
export default NavBar;