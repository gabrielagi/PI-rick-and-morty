import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const DetailCard = styled.div`
  display: flex;
  background-color: #312d36;
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
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const DetailImage = styled.img`
  max-width: 400px;
  flex: 1;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
`;

export const TitleWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  line-height: 1.5;
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const AttributeTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const AttributeValue = styled.h2`
  margin: 0;
`;
