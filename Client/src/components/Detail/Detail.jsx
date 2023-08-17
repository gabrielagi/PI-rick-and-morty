import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  DetailContainer,
  DetailCard,
  DetailInfo,
  DetailImage,
  TitleWrapper,
  AttributeWrapper,
  AttributeTitle,
  AttributeValue,
  BackButton,
} from "./Detail.styled-component";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  // const URL_BASE = "https://rym2-production.up.railway.app/api/character";
  // const API_KEY = "henrym-gabrielagi";
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <DetailContainer>
      {character.name && (
        <DetailCard>
          <DetailImage src={character.image} alt="" />
          <DetailInfo>
            <TitleWrapper>
              <h2>{character.name}</h2>
            </TitleWrapper>
            <AttributeWrapper>
              <AttributeTitle>Specie:</AttributeTitle>
              <AttributeValue>{character.species}</AttributeValue>
            </AttributeWrapper>
            <AttributeWrapper>
              <AttributeTitle>Status:</AttributeTitle>
              <AttributeValue>{character.status}</AttributeValue>
            </AttributeWrapper>
            <AttributeWrapper>
              <AttributeTitle>Gender: </AttributeTitle>
              <AttributeValue>{character.gender}</AttributeValue>
            </AttributeWrapper>
            <AttributeValue>
              Origin: {character.origin && character.origin.name}
            </AttributeValue>
            <NavLink to={`/home`}>
              <BackButton>Cerrar</BackButton>
            </NavLink>
          </DetailInfo>
        </DetailCard>
      )}
    </DetailContainer>
  );
};

export default Detail;
