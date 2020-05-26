import React from "react";
import "./card.css";
import {timeFormat} from '../utils/utils'


function Card(props) {
    const item = props.item;
    // const index = props.index;

    return (
      <div className="card">
          <img className="img" alt="img" src={item.image} />
          <div className="desc">
            <p className="title">{item.name}</p>
            <p className="time">{timeFormat(item.duration)}</p>
          </div>
      </div>
    );
}

export default Card;
