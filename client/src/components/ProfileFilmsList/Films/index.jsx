import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

const Films = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovie = async (url) => {
      const dataResponse = await fetch(url, {
        method: 'GET'
      })
      const dataJson = await dataResponse.json();
      console.log(dataJson);
      setMovie(dataJson);
    }

    fetchMovie(`https://api.themoviedb.org/3/movie/${props.movie}?api_key=ecfc4f2c404a65285db2275752af4018&language=pt-BR`);
  }, []);

  return (
    <article className="film-container">
        {movie && movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie cover"></img>}
        <h3>{movie && movie.title}</h3>
    </article>
  );  
};

export default Films;
