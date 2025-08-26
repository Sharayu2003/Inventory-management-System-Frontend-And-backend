import React from "react";
import ReactDom from "react-dom";
import "./Navbar.css";
const Navbar=()=>{
 return <>
 <nav className="navbar navbar-expand-lg navbar-light p-3 control text-light bgcolor">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex align-items-center gap-3">
            <img className="images" src="/image.png" alt="Logo" style={{ width: "60px", height: "60px" }} />
            <h3>Welcome Admin!</h3>
          </div>
        </div>
        <div className="navbar-nav ms-auto">
          <button type="button" className="btn btn-danger">
            Logout
          </button>
        </div>
 </nav>
 </>
}
export default Navbar;