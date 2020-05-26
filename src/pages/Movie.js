import React from 'react'
import './Movie.css'
import data from "../utils/data";
import share from "../images/btn_share_1.png";

function Movie(props) {
  const index = new URLSearchParams(props.location.search).get("index") || 0;
  return (
      <div className="movie">
      <p className="titleName">{data[index].name}</p>
      <video
        className="video"
        controls="controls"
        src={data[index].resource}
      ></video>
      <img className="share" alt="" src={share} />
    </div>
  );
}

export default Movie;
