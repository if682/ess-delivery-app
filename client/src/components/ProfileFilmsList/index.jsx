import React from "react";
import Films from "./Films";
import "./style.css";

const ProfileFilmsList = (props) => {

  return (
    <article className="profile-films">
      {props.movies.length !== 0 ? (
        props.movies.map((movieId) => (
          <Films key={movieId} movie={movieId} />
        ))
      ) : (
        <h3>There are no movies in this user's history.</h3>
      )}
    </article>
  );  
};

export default ProfileFilmsList;
