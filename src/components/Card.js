import deleteButton from "../images/delete-button.svg";
import likeButton from "../images/like-button.svg";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element">
      <button className="element__delete-button">
        <img src={deleteButton} alt="Logo de botón de eliminar" />
      </button>
      <img
        className="element__image"
        src={props.link}
        onClick={handleClick}
        alt="Imagen"
      />
      <h3 className="element__title">{props.name}</h3>
      <div>
        <button className="element__like-button">
          <img src={likeButton} alt="Logo de botón de me gusta" />
        </button>
        <p className="element__likes">{props.likes}</p>
      </div>
    </li>
  );
}

export default Card;
