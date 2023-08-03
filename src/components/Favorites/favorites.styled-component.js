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
