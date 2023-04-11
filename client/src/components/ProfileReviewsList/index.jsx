import React from "react";
import "./style.css";
import Review from "./Review";
import WithoutReviews from "../WithoutReviews";

const ProfileReviewsList = (props) => {

  const sortedReviews = props.data.reviews?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="list-reviews-section">

      {sortedReviews?.length ? (
        sortedReviews.map((review) => <Review review={review} />)
      ) : (
        <WithoutReviews text={"This user hasn't registered any reviews yet."} />
      )}

    </div>
  );
};

export default ProfileReviewsList;
