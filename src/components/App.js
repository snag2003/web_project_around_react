import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    link: "",
    name: "",
  });
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard({ link: card.link, name: card.name });
    setIsImagePopupOpen(true);
  }
  function closeAllPopups(evt) {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleUpdateUser({ name, about }) {
    api
      .editUserInfo({ name, about })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
    closeAllPopups();
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={(card) => handleCardClick(card)}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="add"
          title="Nuevo Lugar"
          buttonValue="Crear"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              type="text"
              id="title-input"
              className="popup__input"
              name="name"
              placeholder="Título"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error title-input-error">
              Por favor, rellena este campo.
            </span>
          </label>
          <label className="popup__field">
            <input
              type="url"
              id="url-input"
              className="popup__input"
              name="link"
              placeholder="Enlace a la imagen"
              required
            />
            <span className="popup__input-error url-input-error">
              Por favor, introduce una dirección web.
            </span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Cambiar foto de perfil"
          buttonValue="Crear"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              type="url"
              id="url-input-avatar"
              className="popup__input"
              name="link"
              placeholder="Enlace a la imagen"
              required
            />
            <span className="popup__input-error url-input-error">
              Por favor, introduce una dirección web.
            </span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="delete"
          title="¿Estás seguro?"
          buttonValue="Sí"
          onClose={closeAllPopups}
        ></PopupWithForm>
        <ImagePopup
          isOpen={isImagePopupOpen}
          link={selectedCard.link}
          name={selectedCard.name}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
