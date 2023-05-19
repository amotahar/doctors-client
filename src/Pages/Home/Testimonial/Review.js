import React from "react";

const Review = ({ Review }) => {
  const { name, img, review, location } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
