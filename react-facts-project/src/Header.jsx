import reactLogo from "./assets/react_logo.png";

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <img src={reactLogo} alt="react-logo"/>
        <p>ReactFacts</p>
      </nav>
    </header>
  );
}

export default Header;
