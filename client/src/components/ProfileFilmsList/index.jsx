import React from "react";
import Films from "./Films";
import "./style.css";

const ProfileFilmsList = (props) => {

  return (
    <article className="profile-films">
      {props.movies?.map((movie) => (
        <Films movie={movie} />
      ))}
    </article>
  );
};

export default ProfileFilmsList;
