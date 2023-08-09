import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex; /* Utilizamos flex para organizar los elementos en fila */
  align-items: center; /* Centramos verticalmente los elementos */
`;

export const SearchButton = styled.button`
  background-color: #e545ee;
  color: #000; /* Cambiar el color del texto a negro */
  font-size: 12px; /* Ajustar el tamaño de la fuente */
  padding: 5px 10px; /* Ajustar el padding para hacer el botón más pequeño */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f461ff;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #000;
`;
