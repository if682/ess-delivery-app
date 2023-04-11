import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import "./style.css";
import Rating from "./Rating";
import api from "../../services/api";
import StarRating from "./StarRating";

const ReviewModal = (props) => {

  const { title, id, posterPath } = props.movie.movieContext;
  const [context, setContext] = useContext(LoginContext)
  const userId = context.userId

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (newRating) => {
      setRating(newRating);
  };

  const handleTextChange = (event) => {
      setReviewText(event.target.value);
  };

  const postReview = async (reviewData) => {
      try {
        await api.post('review', reviewData);
        alert('Review enviado com sucesso!');
      } catch (error) {
        alert('Erro ao enviar review');
      }
    }

  const handleSubmit = async () => {
      const reviewData = {
          "title": title,
          "review": reviewText,
          "movieId": id.toString(),
          "userId": userId,
          "movieCover": posterPath, 
          "rating": parseFloat(rating),
        };
      
      await postReview(reviewData);
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
        <StarRating defaultRating={rating} onRatingChange={handleRatingChange}/>
        <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default ReviewModal;
