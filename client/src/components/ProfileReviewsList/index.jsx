import React, { useState } from "react";
import "./style.css";
import Review from "./Review";


const ProfileReviewsList = (props) => {

  return (
    <div className="list-reviews-section">

      {props.data.reviews?.length ? (props.data.reviews.map((review) => (
            <Review review={review} />
          ))) : (
            <h2>This user hasn't registered any reviews yet.</h2>
          )}

    </div>
  );
};

export default ProfileReviewsList;
