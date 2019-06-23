import React, { Component } from "react";

//stateless functional component
const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        There are {props.counters.length} items in cart.
      </span>
    </nav>
  );
};

export default Navbar;
