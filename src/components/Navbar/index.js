import React from "react";
import "./style.css";

export default class Navbar extends React.Component {
    state = {
        score: 0,
        topScore: 0
    };
scoreHandler () {
    console.log("Iam running", this.state.score)
    return this.setState({score:this.state.score+1})
}
    render() {
        return (
            <div>
                <nav className="navbar">
                    <p className="title">Clicky Game</p>
                    <p className="scores">Score{this.state.score} | Top Score{this.state.score}</p>
                    <button onClick={(e)=>this.scoreHandler(this.state)}>Image 
                        

                    </button>
                </nav>
            </div>

        )
    }
}


