import globeImage from "../assets/globe.png";

function Header() {
  return (
    <header className="header">
      <img className="headerImg" src={globeImage} alt="globe" />
      <p className="headerTxt">my travel journal.</p>
    </header>
  );
}

export default Header;
