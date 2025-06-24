import chefClaudeIcon from "./assets/chef-claude-icon.png";

function Header() {
  return (
    <>
      <header className="nav-bar">
        <img src={chefClaudeIcon} alt="website-icon" />
        <p>Chef Claude</p>
      </header>
    </>
  );
}

export default Header;
