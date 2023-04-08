import React from "react";
import "./style.css";
import Review from "./Review";

const ProfileReviewsList = () => {

  return (
    <div className="list-reviews-section">
        <Review />
        <Review />
        <Review />
        <Review />
    </div>
  );
};

export default ProfileReviewsList;
