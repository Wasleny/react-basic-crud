import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

import Reviews from "./components/Reviews";

const App = () => {
  const { register, handleSubmit } = useForm();
  const [reviews, setReviews] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [inputId, setInputId] = useState(-1);

  const onSubmit = ({ titleReview, nameAuthorBook, descriptionReview }) => {
    if (!isEditing) {
      setCounter((prevCounter) => prevCounter + 1);
      let review = {
        id: counter,
        titleReview,
        nameAuthorBook,
        descriptionReview,
      };
      let reviewsClone = reviews;
      if (reviewsClone.length === 0) setReviews([...reviews, review]);
      else {
        setReviews([review, ...reviewsClone]);
      }
      limparCampos();
    } else {
      let review = {
        id: inputId,
        titleReview,
        nameAuthorBook,
        descriptionReview,
      };

      let reviewsClone = reviews;
      reviewsClone = reviewsClone.filter((review) => review.id !== inputId);
      reviewsClone.unshift(review);
      setReviews(reviewsClone);

      limparCampos();
    }
    setInputId(-1);
  };

  const editReview = (id) => {
    setIsEditing(true);
    let reviewsClone = reviews;
    let reviewsFiltered = reviewsClone.find((review) => review.id === id);

    document.querySelector(".inputTitleReview").value =
      reviewsFiltered.titleReview;
    document.querySelector(".inputNameAuthorBook").value =
      reviewsFiltered.nameAuthorBook;
    document.querySelector(".inputDescriptionReview").value =
      reviewsFiltered.descriptionReview;
    setInputId(id);
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const limparCampos = () => {
    document.querySelector(".inputTitleReview").value = "";
    document.querySelector(".inputNameAuthorBook").value = "";
    document.querySelector(".inputDescriptionReview").value = "";
  };

  return (
    <div className="App">
      <form method="POST" onSubmit={handleSubmit(onSubmit)} action="">
        <input type="hidden" className="inputId" value={inputId} />
        <input
          className="inputTitleReview"
          type="text"
          placeholder="Título da Resenha"
          {...register("titleReview", { required: true })}
        />
        <input
          className="inputNameAuthorBook"
          type="text"
          placeholder="Autor do Livro"
          {...register("nameAuthorBook", { required: true })}
        />
        <textarea
          className="inputDescriptionReview"
          rows="3"
          {...register("descriptionReview", { required: true })}
          placeholder="Escreva sua resenha"
        ></textarea>
        <button type="submit">"Publicar"</button>
      </form>

      {reviews.length > 0 && (
        <Reviews
          reviews={reviews}
          editReview={editReview}
          deleteReview={deleteReview}
        />
      )}
    </div>
  );
};

export default App;
