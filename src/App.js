import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacter] = useState([]);

  //------Ejercicio 1 a 6------
  //   const example = {
  //     id: 1,
  //     name: "Rick Sanchez",
  //     status: "Alive",
  //     species: "Human",
  //     gender: "Male",
  //     origin: {
  //       name: "Earth (C-137)",
  //       url: "https://rickandmortyapi.com/api/location/1",
  //     },
  //     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //   };

  //   const onSearch = () => {
  //     setCharacter([...characters, example]);
  //   };
  //------Ejercicio 1 a 5------

  const onSearch = (id) => {
    //function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      //id es mi estado local que el usuario escribe en el input
      ({ data }) => {
        if (data.name) {
          setCharacter((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}
export default App;
