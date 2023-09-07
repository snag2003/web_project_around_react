import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo de Around The US" />
      <hr className="header__line" />
    </header>
  );
}

export default Header;
