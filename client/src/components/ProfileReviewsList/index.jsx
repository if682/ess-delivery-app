import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import Review from "./Review";
import api from "../../services/api";

const mockedUserId = "ca22d758-eea5-4ddb-a0a0-437a8d596347"

const ProfileReviewsList = () => {

  const [userReviews, setUserReviews] = useState();

  useEffect(() => {console.log(userReviews)}, [userReviews]);
  
  useEffect(() => {
      const getUserReviews = async () => {
          try {
            const response = await api.get(`review/${mockedUserId}`);
            setUserReviews(response.data);
          } catch (error) {
            alert("Erro ao pegar reviews do usuário");
          }
        };
        getUserReviews();
    }, []);

  return (
    <div className="list-reviews-section">

      {userReviews?.reviews?.length ? (userReviews.reviews.map((review) => (
            <Review review={review} />
          ))) : (
            <h2>This user hasn't registered any reviews yet.</h2>
          )}

    </div>
  );
};

export default ProfileReviewsList;
