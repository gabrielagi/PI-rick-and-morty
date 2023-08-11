import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  background-color: rgba(
    125,
    136,
    174,
    0.3
  ); /* Usar el mismo fondo del formulario */
  /* Verde: 39, 251, 121 Violeta:  116, 25, 117, 0.5 Azul: 	1, 56, 130 Violeta-uva: 213, 30, 248, 0.3 */
  color: #ffffff;
  padding: 10px;
  margin: 10px 10px 40px 10px;
  border-radius: 8px;
  width: 200px;
  height: 270px;
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
  height: 62%;
  margin-top: 10px;
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => (props.isFav ? "#FF1493" : "#FFF")};
`;
