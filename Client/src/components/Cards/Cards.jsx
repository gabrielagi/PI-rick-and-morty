import React from "react";
import { CardsContainer } from "./Cards.styled-component";
import Card from "./../Card/Card";

export default function Cards({ characters, onClose }) {
  return (
    <CardsContainer>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </CardsContainer>
  );
}
