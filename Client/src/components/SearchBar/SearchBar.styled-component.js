import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  margin: 5px 0px 0px;
  color: #ff44cc;
  font-size: 12px;
  padding: 6px 18px;
  border: none;
  border-radius: 4px 4px 4px 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  border: 1px solid #ff44cc;

  &:hover {
    color: #fff;
    box-shadow: 0 0 10px 2px rgba(255, 105, 180, 0.5);
  }
`;

export const SearchInput = styled.input`
  border: 1.5px solid #1d252d;
  border-radius: 4px 4px 4px 4px;
  margin: 5px 0px 0px;
  height: 25px;
  font-size: 16px;
  padding-left: 4px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    font-size: 13px; /* Tamaño de las letras del placeholder */
    padding-left: 4px;
    color: rgba(
      255,
      255,
      255,
      0.5
    ); /* Color semi traslúcido para el placeholder */
  }

  &:focus {
    outline: none;
    border: 1px solid #615f60;
  }
`;
