import React, { useEffect, useState } from "react";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import Moment from "react-moment";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  const deleteReview = (id) => {
  };

  useEffect(() => {
    setReviews([...props.reviews]);
  }, [props.reviews]);

  return (
    <div>
      {reviews.map((review) => (

        <div className="review" key={review.id}>
          <div>
            <div className="buttons">
              <button className="deleteReview" onClick={() => deleteReview(review.id)}>
                <FaTrash />
              </button>
              <button className="editReview" onClick={() => props.editReview(review.id)}>
                <FaRegEdit />
              </button>
            </div>
            <Moment format="DD/MM/YYYY HH:mm:ss">2021-11-16 11:50:11</Moment>
          </div>
          <div>
            <fieldset>
              <legend>Título:</legend>
              <div className="titleReview">{review.titleReview}</div>
            </fieldset>
            <fieldset>
              <legend>Autor:</legend>
              <div className="nameAuthorBook">{review.nameAuthorBook}</div>
            </fieldset>
            <fieldset>
              <legend>Resenha:</legend>
              <div className="descriptionReview">{review.descriptionReview}</div>
            </fieldset>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
