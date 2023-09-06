function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element">
      <button className="element__delete-button">
        <img src="/images/delete-button.svg" alt="Logo de botón de eliminar" />
      </button>
      <img className="element__image" src={props.link} onClick={handleClick} />
      <h3 className="element__title">{props.title}</h3>
      <div>
        <button className="element__like-button">
          <img src="./images/like-button.svg" alt="Logo de botón de me gusta" />
        </button>
        <p className="element__likes">{props.likes}</p>
      </div>
    </li>
  );
}

export default Card;
