import React from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import cards from "../cards"

export default class Homepage extends React.Component {      

    state = {
        score: 0,
        topScore: 0
    };

    scoreHandler () {
    console.log("Iam running", this.state.score)
    return this.setState({score:this.state.score+1})
}
    render(){
        return(
            <div>
                <Navbar 
                score={this.state.score} 
                topScore={this.state.score}
                />
                <Jumbotron/>
                <Card 
                cardList={cards}
                scoreHandler ={(cards)=>this.scoreHandler(this.state)}
                />
            </div>
            )
        }
}