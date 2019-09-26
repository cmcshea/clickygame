import React from "react";
import "./style.css";

const Card = (arr) => {
    return (
        <div>
        {arr.map((item) => {
        return (
            <div id={item.id} className="card" style="width: 18rem;">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{item.name}</p>
                </div>
            </div>
        )
    })}
    </div>    
    )
}
export default Card;