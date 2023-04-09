import React from "react";
import "./style.css";

const Films = (props) => {

  return (
    <article className="film-container">
        <img src={props.movie.movieCover} alt="Movie cover"></img>
        <h3>{props.movie.title}</h3>
    </article>
  );
};

export default Films;
