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

  const existCharacter = (id) => {
    return characters.some((character) => character.id === Number(id));
  };

  const onSearch = (id) => {
    if (!existCharacter(id) || characters.length === 0) {
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
    } else {
      alert("El personaje ya se esta mostrando");
    }
  };

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacter(filteredCharacters);
  };

  const handleAddRandomCharacter = async () => {
    try {
      const response = await axios("https://rickandmortyapi.com/api/character");
      const randomCharacter =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
      onAddRandomCharacter(randomCharacter);
    } catch (error) {
      alert("Error fetching random character. Please try again later.");
    }
  };

  const onAddRandomCharacter = (randomCharacter) => {
    if (!existCharacter(randomCharacter.id)) {
      setCharacter((oldChars) => [...oldChars, randomCharacter]);
    } else {
      alert("El personaje ya se está mostrando");
    }
  };

  return (
    <div className="App">
      <Nav
        onSearch={onSearch}
        onAddRandomCharacter={handleAddRandomCharacter}
      />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}
export default App;
