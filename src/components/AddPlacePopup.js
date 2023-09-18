import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <PopupWithForm
      name="add"
      title="Nuevo Lugar"
      buttonValue="Crear"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
        />
        {/* Add error handling here if needed */}
      </label>
      <label className="popup__field">
        <input
          type="url"
          id="url-input"
          className="popup__input"
          name="link"
          placeholder="Enlace a la imagen"
          required
          value={link}
          onChange={handleLinkChange}
        />
        {/* Add error handling here if needed */}
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
