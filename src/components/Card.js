import deleteButton from "../images/delete-button.svg";
import likeButton from "../images/like-button.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import React from "react";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__delete-button ${
    isOwn ? "element__delete-button_active" : ""
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Crea una variable que después establecerás en `className` para el botón like
  const cardLikeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card); // Call the like handler
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card); // Call the delete handler
  }

  return (
    <li className="element">
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}>
        <img src={deleteButton} alt="Logo de botón de eliminar" />
      </button>
      <img
        className="element__image"
        src={props.card.link}
        onClick={handleClick}
        alt="Imagen"
      />
      <h3 className="element__title">{props.card.name}</h3>
      <div>
        <button className={cardLikeButtonClassName} onClick={handleLikeClick}>
          <img src={likeButton} alt="Logo de botón de me gusta" />
        </button>
        <p className="element__likes">{props.card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
