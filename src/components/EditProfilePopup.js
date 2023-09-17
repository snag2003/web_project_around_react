import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit"
      title="Editar perfil"
      buttonValue="Guardar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__input-error category-input-error">
          Por favor, rellena este campo.
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
