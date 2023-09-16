import React from "react";
import Card from "./Card.js";
import EditButton from "../images/edit-button.svg";
import AddButton from "../images/add-button.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(
          res.map((card) => ({
            link: card.link,
            name: card.name,
            likes: card.likes,
            _id: card._id,
            owner: card.owner,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__container">
          <div
            className="profile__overlay-container"
            onClick={props.onEditAvatarClick}
          >
            <div className="profile__overlay"></div>
            <img
              className="profile__picture"
              alt="Foto del perfil"
              src={currentUser.avatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                onClick={props.onEditProfileClick}
              >
                <img src={EditButton} alt="Logo de botón de editar" />
              </button>
            </div>
            <h2 className="profile__job">{currentUser.about}</h2>
          </div>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlaceClick}>
          <img src={AddButton} alt="Logo de botón de eliminar" />
        </button>
      </div>
      <div className="elements">
        <ul className="elements__container">
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              onCardClick={() => props.onCardClick(card)}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
