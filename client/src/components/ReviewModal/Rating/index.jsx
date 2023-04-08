import { useState } from "react";

function Rating({ defaultRating, onRatingChange }) {
  const [rating, setRating] = useState(defaultRating);

  const handleRatingChange = (event) => {
    const newRating = event.target.value;
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div>
      <label htmlFor="rating">Rating:</label>
      <select id="rating" value={rating} onChange={handleRatingChange}>
        <option value="">-- Select --</option>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        <option value="2.5">2.5</option>
        <option value="3">3</option>
        <option value="3.5">3.5</option>
        <option value="4">4</option>
        <option value="4.5">4.5</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default Rating;
