import React, { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import Moment from "react-moment";
import "./index.css";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews([...props.reviews]);
  }, [props.reviews]);

  return (
    <div className="reviewsList">
      {reviews.map((review) => (
        <div className="review" key={review.id}>
          <div className="headerReview">
            <div className="buttons">
              <button
                className="deleteReview"
                onClick={() => props.deleteReview(review.id)}
              >
                <FaTrash size={20} />
              </button>
              <button
                className="editReview"
                onClick={() => props.editReview(review.id)}
              >
                <FaPencilAlt size={20} />
              </button>
            </div>
            <i>
              <Moment format="DD/MM/YYYY HH:mm:ss" className="dateTime">
                {review.dateTimePublished}
              </Moment>
            </i>
          </div>
          <div className="contentReview">
              <div className="titleReview">{review.titleReview}</div>
              <div className="nameAuthorBook">{review.nameAuthorBook}</div>
              <br />
              <div className="descriptionReview">
                {review.descriptionReview}
              </div>
          </div>
          <hr  color="#6eaa5e"/>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
