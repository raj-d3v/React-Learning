import "./App.css";
import Navbar from "./components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        App Component Counter {count}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
}

export default App;
