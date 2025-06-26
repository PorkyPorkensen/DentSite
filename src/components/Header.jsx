import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Header() {


  return (
    <div className="headDiv">
        <div className="logoDiv">
            <h1 className="header">Barrie Dental</h1>
            <p>serving barrie since 2005</p>
        </div>
      <div className="linkDiv">
        <Link to="/">Home</Link> {"|"}  
        <Link to="/contact">Contact</Link> {""}     
     </div>
      <Outlet />
    </div>
  );
}