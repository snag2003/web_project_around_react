import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Editar perfil"
        buttonValue="Guardar"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            type="text"
            id="name-input"
            className="popup__input"
            name="name"
            placeholder="Nombre"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error name-input-error">
            Por favor, rellena este campo.
          </span>
        </label>
        <label className="popup__field">
          <input
            type="text"
            id="category-input"
            className="popup__input"
            name="about"
            placeholder="Acerca de mí"
            minLength="2"
            maxLength="400"
            required
          />
          <span className="popup__input-error category-input-error">
            Por favor, rellena este campo.
          </span>
        </label>
      </PopupWithForm>
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
      <template id="new-card">
        <li className="element">
          <img className="element__image" src="#" />
          <button className="element__delete-button">
            <img
              src="./images/delete-button.svg"
              alt="Logo de botón de eliminar"
            />
          </button>
          <h3 className="element__title"></h3>
          <div>
            <button className="element__like-button">
              <img
                src="./images/like-button.svg"
                alt="Logo de botón de me gusta"
              />
            </button>
            <p className="element__likes"></p>
          </div>
        </li>
      </template>
      <PopupWithImage />
    </div>
  );
}

export default App;
