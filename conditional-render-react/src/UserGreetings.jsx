import PropTypes from "prop-types";

function UserGreetings(props) {
  const welcome = <h1 className="welcome">Welcome {props.user}</h1>;
  const login = <h1 className="login">Please Login</h1>;

  return props.isLoggedIn ? welcome : login;
}

// PropTypes help us catch bugs by checking the type of props passed to the component.

UserGreetings.propTypes = {
  // isLoggedIn should be a boolean (true/false)
  isLoggedIn: PropTypes.bool,
  // user should be a string (like a username)
  user: PropTypes.string,
};

export default UserGreetings;
