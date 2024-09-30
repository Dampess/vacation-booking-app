import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const stars = Array(Math.floor(review.rating)).fill("⭐");

  return (
    <div className="review">
      <h4>{review.userName}</h4>
      <p>
        {stars.join("")} ({review.rating}/5)
      </p>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
