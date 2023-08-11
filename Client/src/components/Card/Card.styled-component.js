import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  background-color: rgba(
    213,
    30,
    248,
    0.3
  ); /* Usar el mismo fondo del formulario */
  /* Verde: 39, 251, 121 Violeta:  116, 25, 117, 0.5 Azul: 	1, 56, 130*/
  color: #ffffff;
  padding: 10px;
  margin: 10px 10px 40px 10px;
  border-radius: 8px;
  width: 200px;
  height: 300px;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    margin: 45px 10px 15px 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 14px; /* Tamaño de fuente más pequeño */
  border-radius: 50%; /* Para hacerlo redondo */
  width: 23px; /* Ancho del botón */
  height: 23px; /* Alto del botón */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CharacterName = styled.h2`
  font-size: 20px;
  margin: 10;
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-weight: 600;
`;

export const CharacterInfo = styled.p`
  font-size: 14px;
  margin: 0; /* Elimina el margen para ajustar el tamaño */
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #ffffff;
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
  font-size: 20px;
  color: ${(props) => (props.isFav ? "#FF1493" : "#FFF")};
`;
