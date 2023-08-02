import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Error404 from "./components/Error404/Error404";
import { ThemeProvider } from "styled-components"; // Import ThemeProvider from styled-components
import { GlobalStyle, theme } from "./layout.styled-component";
import portalGif from "./assets/portal-rick-and-morty.gif";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

//const URL_BASE = "https://rym2-production.up.railway.app/api/character/10?key=henrym-gabrielagi";
const URL_BASE = "https://rym2-production.up.railway.app/api/character";
const API_KEY = "henrym-gabrielagi";

const email = "gabriela@gmail.com";
const password = "123asd";

function App() {
  const [characters, setCharacter] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
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

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
    }
    setAccess(true);
    navigate("/home");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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
    axios("https://rickandmortyapi.com/api/character").then(({ data }) => {
      const randomCharacter =
        data.results[Math.floor(Math.random() * data.results.length)];
      onAddRandomCharacter(randomCharacter);
    });
  };

  const onAddRandomCharacter = (randomCharacter) => {
    if (!existCharacter(randomCharacter.id)) {
      setCharacter((oldChars) => [...oldChars, randomCharacter]);
    } else {
      alert("El personaje ya se está mostrando");
    }
  };
  //<Route path="*" element={<Error404 />} />

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle access={access} />

      <div className="App">
        {location.pathname !== "/" && (
          <Nav
            onSearch={onSearch}
            onAddRandomCharacter={handleAddRandomCharacter}
            setAccess={setAccess}
          />
        )}
        <img id="portal-gif" src={portalGif} alt="Portal GIF" />
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
export default App;
