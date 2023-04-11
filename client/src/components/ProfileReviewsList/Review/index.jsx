import React from "react";
import "./style.css";


const Review = (props) => {

  return (
    <div className="review-container">

       <img src={props.review.movieCover} alt="Movier poster"/>
        <div className="review-text">

            <div className="review-title">
                <h2>{props.review.title}</h2>
                <img src="../../assets/star-icon.svg" />
                <h3>{props.review.rating}/5</h3>
            </div>
            <h2>{props.review.review}</h2>
        </div>
        
    </div>
  );
};

export default Review;
