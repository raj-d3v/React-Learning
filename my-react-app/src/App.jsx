import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Module-Style-Button/Button.jsx";
import InlineStyleButton from "./InlineStyleButton.jsx";

function App() {
  return (
    // -> We can write tags or jsx in short hand like this <Header/>
    // -> This is a fragment <> </> Noramlly we can only return one element by using fragemnt we can return multiple elements shown below

    <>
      <Header></Header>

      <Food />

      <Card />
      <Card />

      <Button />

      <InlineStyleButton />

      <Footer />
    </>
  );
}

export default App;
