import React from "react";
import "./style.css";
import { format } from "date-fns";

const Review = (props) => {

  const createdAtDate = new Date(props.createdAt);
  const formattedDate = format(createdAtDate, 'dd/MM/yyyy HH:mm');

  return (
    <div className="review-container">

       <img src={props.movieCover} alt="Movier poster"/>
        <div className="review-text">

            <div className="review-title">
                <h2>{props.title}</h2>
                {props.rating >= 1 && 
                  <>
                    <img src="../../assets/star-icon.svg" alt="Rating star icon"/>
                    <h3>{props.rating}/5</h3>
                  </>
                }
            </div>
            <p className="review-date">Logged on {formattedDate}</p>
            <h2>{props.review}</h2>
        </div>
    </div>
  );
};

export default Review;
