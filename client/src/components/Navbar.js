import React from "react";
import { NavLink } from "react-router-dom";
import bankicon from "../assets/bank-icon.png";

function Navbar() {
  return (
    <div className="header">
      <NavLink to="/" className="logo">
        <img src={bankicon} id="bank-icon" alt="#"></img>
        National Bank
      </NavLink>
      <div className="header-right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/viewallcustomers">View All Customers</NavLink>
        <NavLink to="/transectionhistory">Transection History</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
