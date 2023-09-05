function Main(props) {
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
              src="/images/jacques_cousteau.jpg"
            />
          </div>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__name">Cousteau</h1>
              <button
                className="profile__edit-button"
                onClick={props.onEditProfileClick}
              >
                <img
                  src="/images/edit-button.svg"
                  alt="Logo de botón de editar"
                />
              </button>
            </div>
            <h2 className="profile__job">Explorador</h2>
          </div>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlaceClick}>
          <img src="/images/add-button.svg" alt="Logo de botón de eliminar" />
        </button>
      </div>
      <div className="elements">
        <ul className="elements__container"></ul>
      </div>
    </main>
  );
}

export default Main;
