import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data.js";

function App() {
  const entryElemets = data.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <>
      <Header />
      {entryElemets}
    </>
  );
}

export default App;
