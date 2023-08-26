import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
//import Error404 from "./components/Error404/Error404";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./layout.styled-component";
import portalGif from "./assets/portal-rick-and-morty.gif";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

//const URL_BASE = "https://rym2-production.up.railway.app/api/character/10?key=henrym-gabrielagi";
// const URL_BASE = "https://rym2-production.up.railway.app/api/character";
// const API_KEY = "henrym-gabrielagi";

const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const [characters, setCharacter] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  const isCharacterDuplicate = (id) => {
    return characters.some((character) => character.id === id);
  };

  const onSearch = async (id) => {
    try {
      if (!isCharacterDuplicate(id)) {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        if (data.name) {
          // Verificar si el personaje ya está en la lista antes de agregarlo
          if (!isCharacterDuplicate(data.id)) {
            setCharacter((oldChars) => [...oldChars, data]);
          } else {
            alert("El personaje ya se está mostrando");
          }
        }
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
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
      const { data } = await axios("https://rickandmortyapi.com/api/character");
      const randomCharacter =
        data.results[Math.floor(Math.random() * data.results.length)];
      await onAddRandomCharacter(randomCharacter);
    } catch (error) {
      console.error("Error al obtener personaje aleatorio:", error);
    }
  };

  const onAddRandomCharacter = async (randomCharacter) => {
    try {
      if (!isCharacterDuplicate(randomCharacter.id)) {
        setCharacter((oldChars) => [...oldChars, randomCharacter]);
      } else {
        alert("El personaje ya se está mostrando");
      }
    } catch (error) {
      console.error("Error al agregar personaje aleatorio:", error);
    }
  };

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
