import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #292929;
  color: #ffffff;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
`;

export const CloseButton = styled.button`
  background-color: red;
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
