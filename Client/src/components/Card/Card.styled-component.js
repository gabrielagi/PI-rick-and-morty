import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #fff;
  color: #ffffff;
  padding: 10px;
  margin: 10px 10px 110px 10px; /* 10px arriba, 3px derecha, 30px abajo, 5px izquierda */
  border-radius: 8px;
  width: 200px;
  height: 300px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  /* Asegura que el contenido se superponga a la imagen */
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 45px 10px 65px 10px;
  }
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
  font-size: 20px;
  margin: 10;
  color: #1d252d;
  font-family: Roboto, sans-serif;
  font-weight: 600;
`;

export const CharacterInfo = styled.p`
  font-size: 14px;
  margin: 0; /* Elimina el margen para ajustar el tamaño */
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #1d252d;
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
  border-radius: 0px 0px 8px 8px;
  margin-top: 10px;
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => (props.isFav ? "#FF1493" : "#FFF")};
`;
