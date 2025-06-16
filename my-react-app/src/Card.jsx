import profilePic from "./assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile-picture" className="card-img" />
      <h2 className="card-title">Raj Code</h2>
      <p className="card-text">
        I'm a Website Developer and love to drink coffee
      </p>
    </div>
  );
}

export default Card;
