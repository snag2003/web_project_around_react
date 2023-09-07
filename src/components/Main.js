import React from "react";
import api from "../utils/api";
import Card from "./Card.js";
import EditButton from "../images/edit-button.svg";
import AddButton from "../images/add-button.svg";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(
          res.map((card) => ({
            link: card.link,
            name: card.name,
            likes: card.likes,
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
              src={userAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                onClick={props.onEditProfileClick}
              >
                <img src={EditButton} alt="Logo de botón de editar" />
              </button>
            </div>
            <h2 className="profile__job">{userDescription}</h2>
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
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={() => props.onCardClick(card)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
