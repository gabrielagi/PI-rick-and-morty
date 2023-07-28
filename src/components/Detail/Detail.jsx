import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  DetailContainer,
  DetailCard,
  DetailInfo,
  DetailImage,
  TitleWrapper,
  AttributeWrapper,
  AttributeTitle,
  AttributeValue,
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
      {character.name && (
        <DetailCard>
          <DetailImage src={character.image} alt="" />
          <DetailInfo>
            <TitleWrapper>
              <h2>Name: {character.name}</h2>
            </TitleWrapper>
            <AttributeWrapper>
              <AttributeTitle>Specie:</AttributeTitle>
              <AttributeValue>{character.species}</AttributeValue>
            </AttributeWrapper>
            <AttributeWrapper>
              <AttributeTitle>Status:</AttributeTitle>
              <AttributeValue>{character.status}</AttributeValue>
            </AttributeWrapper>
            <h2>{character.gender}</h2>
            <h2>{character.origin && character.origin.name}</h2>
          </DetailInfo>
        </DetailCard>
      )}
    </DetailContainer>
  );
};

export default Detail;

