import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Rating from "./Rating";
import api from "../../services/api";

const ReviewModal = (props) => {

    const storage = window.localStorage;
    const movieTitle = storage.getItem("title");
    const movieId = storage.getItem("id");
    const movieCover = storage.getItem("posterPath");
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
            "title": movieTitle,
            "review": reviewText,
            "movieId": movieId,
            "userId": "ca22d758-eea5-4ddb-a0a0-437a8d596347",
            "movieCover": movieCover, 
            "rating": parseFloat(rating),
          };
        console.log(typeof(parseFloat(rating)))
        
        await postReview(reviewData);
        props.onClose();
    };


    useEffect(() => {
        const fetchMovie = async () => {
          try {
            const response = await api.get(`/movie/${movieId}`);
            console.log(response)
          } catch (error) {
            console.log(error);
          }
        };
        fetchMovie();
      }, [movieId]);

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
