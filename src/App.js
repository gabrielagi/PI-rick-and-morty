import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
