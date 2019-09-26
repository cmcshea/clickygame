import React from "react";
import "./style.css";

const Navbar = (props) => {
    return (
      <div>   
        <nav className="navbar">
          <p className="title">Clicky Game</p>
          <p className="scores">Score{props.score} | Top Score{props.topScore}</p>
                </nav>
            </div>
        )
}


export default Navbar;


