import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [characters, setCharacter] = useState([]);

  const example = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  const onSearch = () => {
    setCharacter([...characters, example]);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
