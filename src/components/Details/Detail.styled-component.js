import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const DetailCard = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  max-width: 800px;
  margin-top: 20px;
  border: 5px solid #ffffff;
`;

export const DetailInfo = styled.div`
  padding: 30px;
  flex: 1;
`;

export const DetailImage = styled.img`
  max-width: 400px;
`;
