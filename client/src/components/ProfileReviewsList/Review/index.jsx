import React from "react";
import "./style.css";


const Review = (props) => {

  console.log(props.review)
  return (
    <div className="review-container">

       <img src="../../assets/movie-poster.svg" />
        <div className="review-text">

            <div className="review-title">
                <h2>The GodFather (2012) </h2>
                <img src="../../assets/star-icon.svg" />
                <h3>10/10</h3>
            </div>
            <h2>{props.review.review}</h2>
        </div>
        
    </div>
  );
};

export default Review;
