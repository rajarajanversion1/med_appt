import React, { useState } from 'react';

const GiveReviews = ({ doctor, onSubmit, onClose, submitted }) => {

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {

    const reviewData = {
      name,
      review,
      rating
    };

    onSubmit(reviewData);

    setName('');
    setReview('');
    setRating(0);

    onClose();
  };

  return (
    <div className="review-popup">

      <h3>Give Your Review</h3>

      <p><strong>Doctor:</strong> {doctor.name}</p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Write your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      {/* Rating */}
      <div className="rating">

        {[1, 2, 3, 4, 5].map((num) => (

          <span
            key={num}
            onClick={() => setRating(num)}
            style={{
              cursor: "pointer",
              fontSize: "22px",
              color: num <= rating ? "gold" : "gray"
            }}
          >
            ★
          </span>

        ))}

      </div>

      <button
        onClick={handleSubmit}
        disabled={submitted}
      >
        Submit
      </button>

    </div>
  );
};

export default GiveReviews;