import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Details/Detail";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Error404 from "./components/Error404/Error404";
import { ThemeProvider } from "styled-components"; // Import ThemeProvider from styled-components
import { GlobalStyle, theme } from "./RYMBackground.styled-component";

//const URL_BASE = "https://rym2-production.up.railway.app/api/character/10?key=henrym-gabrielagi";
const URL_BASE = "https://rym2-production.up.railway.app/api/character";
const API_KEY = "henrym-gabrielagi";

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
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(
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

  const handleAddRandomCharacter = () => {
    axios("https://rickandmortyapi.com/api/character")
      .then(({ data }) => {
        const randomCharacter =
          data.results[Math.floor(Math.random() * data.results.length)];
        onAddRandomCharacter(randomCharacter);
      })
      .catch((error) => {
        alert("Error fetching random character. Please try again later.");
      });
  };

  const onAddRandomCharacter = (randomCharacter) => {
    if (!existCharacter(randomCharacter.id)) {
      setCharacter((oldChars) => [...oldChars, randomCharacter]);
    } else {
      alert("El personaje ya se está mostrando");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Nav
          onSearch={onSearch}
          onAddRandomCharacter={handleAddRandomCharacter}
        />
        <Routes>
          <Route
            path="/"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
export default App;
