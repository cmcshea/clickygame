import React from "react";
import "./style.css";

const Card = (props) => {
    console.log(props)
    return (
        <div>
        {props.cardList.map((item) => {
        return (
            <div id={item.id} onClick={(e)=> props.scoreHandler()}>
                <img src={item.image} alt="..." />
                <div>
                    <p>{item.name}</p>
                </div>
            </div>
        )
    })}
    </div>    
    )
}
export default Card;