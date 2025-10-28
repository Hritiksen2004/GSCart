import React, { useEffect, useState } from 'react';

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/reviews?productId=${productId}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error("Error fetching reviews:", err));
  }, [productId]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-3">Customer Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.id} className="border-b border-gray-200 py-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{review.user}</span>
              <span className="text-yellow-500">⭐ {review.rating}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
};

export default Reviews;
