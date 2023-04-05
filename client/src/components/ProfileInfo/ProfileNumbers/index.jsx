import React from "react";
import "./style.css";

const ProfileNumbers = () => {

  return (
        <section className="user-info-container">
            <div className="movies">
                <p>196</p>
                <p>movies</p>
            </div>

            <div className="following">
                <p>12</p>
                <p>following</p>
            </div>

            <div className="followers">
                <p>11</p>
                <p>followers</p>
            </div>
        </section>
  );
};

export default ProfileNumbers;
