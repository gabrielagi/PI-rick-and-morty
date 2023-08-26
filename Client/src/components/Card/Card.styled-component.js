import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
  0% {
    border-color: #ff6bd6;
  }
  25% {
    border-color: #8DF904;
  }
  50% {
    border-color: #FF4800;
  }
  75% {
    border-color: #66BDFF;
  }
  100% {
    border-color: #ff6bd6;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  background-color: rgba(30, 13, 58, 0.7);
  color: #ffffff;
  padding: 10px;
  /* Arriba | Derecha | Abajo | Izquierda */
  margin: 55px 15px 5px 15px;
  border-radius: 8px;
  width: 170px;
  height: 220px;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 18px 2px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  /* animation: ${borderAnimation} 5s linear infinite;  Aplica la animación al borde */

  &:hover {
    transform: scale(1.05);
    border: 1.5px solid #8df904;
  }

  @media screen and (max-width: 768px) {
    margin: 70px 10px 0px 10px;
    padding: 20px;
  }
`;

export const CharacterName = styled.h2`
  font-size: 22px;
  margin: 10px;
  color: #08bae3;
  font-family: "Get Schwifty", Roboto, sans-serif;
  font-weight: 600;
  -webkit-text-stroke: 0.01px #fff765;
  /* Muestra un efecto de puntos suspensivos cuando el titulo es largo(...) */
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const statusColors = {
  Alive: { color: "#8DF904", background: "rgba(	109, 255, 194, 0.1)" },
  Dead: { color: "#FF4800", background: "rgba(255, 0, 0, 0.15)" },
  unknown: { color: "#66BDFF", background: "rgba(7, 48, 140, 0.4)" },
  default: { color: "#ffffff", background: "rgba(255, 255, 255, 0.2)" },
};

export const CharacterStatus = styled.p`
  font-size: 11px;
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: ${({ status }) =>
    statusColors[status]?.color || statusColors.default.color};

  /* Nuevo estilo para el recuadro */
  padding: 4px 8px; /* Espaciado interno */
  background-color: ${({ status }) =>
    statusColors[status]?.background || statusColors.default.background};
  border: 1px solid
    ${({ status }) => statusColors[status]?.color || statusColors.default.color};
  border-radius: 4px;
  margin-left: auto; /* Titulo lado derecho */
`;

export const CharacterInfo = styled.p`
  font-size: 14px;
  margin: 0; /* Elimina el margen para ajustar el tamaño */
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #ffffff;
`;

export const DetailsButton = styled.button`
  position: absolute;
  bottom: 10px; /* Posición desde abajo */
  left: 50%; /* Centrar horizontalmente */
  transform: translateX(-50%); /* Centrar horizontalmente */
  background-color: #1d252d;
  color: #ffffff;
  border: none;
  padding: 4px 9px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #82e405;
    background-image: none;
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 114%; /* Ocupa todo el alto disponible en el CardWrapper */
`;

export const CharacterImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 0px 0px 8px 8px;
  height: 62%;
  margin-top: 14px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 7px;
  background-color: red;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 9px; /* Tamaño de fuente más pequeño */
  border-radius: 50%; /* Para hacerlo redondo */
  width: 16px; /* Ancho del botón */
  height: 16px; /* Alto del botón */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 2px;
  left: 1px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: ${(props) => (props.isFav ? "#FF1493" : "#FFF")};
`;
