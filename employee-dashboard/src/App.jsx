import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Body";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-200 p-6">
        <Header />

        <Main />
      </div>
    </div>
  );
}

export default App;
