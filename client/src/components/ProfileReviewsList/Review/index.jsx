import React from "react";
import "./style.css";


const Review = () => {

  return (
    <div className="review-container">

       <img src="../../assets/movie-poster.svg" />
        <div className="review-text">

            <div className="review-title">
                <h2>The GodFather (2012) </h2>
                <img src="../../assets/star-icon.svg" />
                <h3>10/10</h3>
            </div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis risus nec dui facilisis, non ultrices ante rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ligula tellus, faucibus sit amet lorem sed, elementum semper tellus.</h2>
        </div>
        
    </div>
  );
};

export default Review;
