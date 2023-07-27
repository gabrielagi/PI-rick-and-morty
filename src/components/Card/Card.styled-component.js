import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #292929;
  color: #ffffff;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  width: 250px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const CharacterName = styled.h2`
  font-size: 18px;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharacterImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-top: 10px;
`;
