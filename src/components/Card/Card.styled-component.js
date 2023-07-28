import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #38b3c3;
  color: #ffffff;
  padding: 10px;
  margin: 20px 10px 100px 10px; /* 10px arriba, 3px derecha, 30px abajo, 5px izquierda */
  border-radius: 8px;
  width: 200px;
  height: 300px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
`;

export const CloseButton = styled.button`
  background-color: red;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 3px;
`;

export const CharacterName = styled.h2`
  font-size: 20px; /* Aumenta el tamaño de fuente para el título principal */
  margin: 10; /* Elimina el margen para ajustar el tamaño */
  color: #ffffff; /* Cambia el color a #1d252d */
  font-family: Roboto, sans-serif; /* Aplica la fuente Roboto */
  font-weight: 600; /* Asegura que la fuente sea de peso normal (fino) */
`;

export const CharacterInfo = styled.p`
  font-size: 14px; /* Reduce el tamaño de fuente para la información */
  margin: 0; /* Elimina el margen para ajustar el tamaño */
  font-family: Roboto, sans-serif; /* Aplica la fuente Roboto */
  font-weight: 400; /* Establece la fuente como ligera (fina) */
  color: #ffffff; /* Cambia el color a #ffffff */
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%; /* Ocupa todo el alto disponible en el CardWrapper */
`;

export const CharacterImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 10px;
`;
