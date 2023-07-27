import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  DetailContainer,
  DetailCard,
  DetailInfo,
  DetailImage,
} from "./Detail.styled-component";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const URL_BASE = "https://rym2-production.up.railway.app/api/character";
  const API_KEY = "henrym-gabrielagi";
  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <DetailContainer>
      {character && (
        <DetailCard>
          <DetailInfo>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin && character.origin.name}</h2>
          </DetailInfo>
          <DetailImage src={character.image} alt="" />
        </DetailCard>
      )}
    </DetailContainer>
  );
};

export default Detail;
