import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const avatarInput = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Cambiar foto de perfil"
      buttonValue="Crear"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="url"
          id="url-input-avatar"
          className="popup__input"
          name="link"
          placeholder="Enlace a la imagen"
          required
          ref={avatarInput}
        />
        <span className="popup__input-error url-input-error">
          Por favor, introduce una dirección web.
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
