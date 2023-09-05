function PopupWithImage() {
  return (
    <div className="popup popup_type_open-image">
      <div className="popup__open-image">
        <button className="popup__close-button">
          <img src="./images/close-button.svg" alt="Logo de botón de cerrar" />
        </button>
        <img className="popup__image" />
        <h2 className="popup__image-subtitle"></h2>
      </div>
    </div>
  );
}

export default PopupWithImage;
