import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter);
  return <h1>Navbar Component Counter {count}</h1>;
}

export default Navbar;
