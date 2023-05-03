import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import HandleUserActions from "../../../pages/handleUserActions";

const Films = (props) => {
  const [movie, setMovie] = useState();
  const { getMovieInfo } = HandleUserActions();

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const movieInfo = await getMovieInfo(props.movie);
      setMovie(movieInfo);
    };

    fetchMovieInfo();
  }, []);

  return (
    <article className="film-container">
        {movie && movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie cover"></img>}
        <h3>{movie && movie.title}</h3>
    </article>
  );  
};

export default Films;
