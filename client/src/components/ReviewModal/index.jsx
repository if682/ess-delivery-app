import React from "react";
import { useState } from "react";
import "./style.css";
import Rating from "./Rating";

const ReviewModal = (props) => {

    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleSubmit = () => {
        console.log('submitando ', rating, reviewText)
        props.onClose();
    };

  return (
    <div className="modal">

        <div className="modal-header">
            <h2>Share your thoughts</h2>
            <div className="close-button" onClick={props.onClose}>
                <img src="../../assets/close-icon.svg" alt="Close" />
            </div>
        </div>
        <p>Add your review about this movie below:</p>
        <textarea value={reviewText} onChange={handleTextChange} />
        <Rating defaultRating={rating} onRatingChange={handleRatingChange} />
        <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default ReviewModal;
