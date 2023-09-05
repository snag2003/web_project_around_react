function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_form popup_type_${props.name} ${
        props.isOpen ? "popup__visible" : ""
      }`}
      onClick={props.onClose}
    >
      <form className="popup__form" name={`${props.name}-info`} noValidate>
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        >
          <img src="./images/close-button.svg" alt="Logo de botón de cerrar" />
        </button>
        <h2 className="popup__title">{props.title}</h2>
        <fieldset className="popup__fields">
          {props.children}
          <button className="popup__submit-button" type="submit">
            {props.buttonValue}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default PopupWithForm;
