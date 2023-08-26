import styled from "styled-components";

export const PageContainer = styled.div`
  padding-top: 60px; /* Distancia del contenedor general al nav */
  @media (max-width: 768px) {
    padding-top: 110px;
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  margin-bottom: 15px;

  select {
    font-size: 16px;
    margin-right: 10px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CustomSelect = styled.select`
  font-size: 14px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 40px 15px 0 15px;

  &:hover {
    background-color: #dae1e5;
    cursor: pointer;
    color: #000;
  }
`;
