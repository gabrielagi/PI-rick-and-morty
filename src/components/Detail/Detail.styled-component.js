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
  margin-top: 30px; /* Margen superior de 20px */
  border: 5px solid #ffffff;

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    flex-direction: column;
  }
`;

export const DetailInfo = styled.div`
  padding: 30px;
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    padding: 20px;
  }
`;

export const DetailImage = styled.img`
  max-width: 400px;
  flex: 1;
  object-fit: cover;
  border-radius: 8px 0 0 8px;

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    max-width: 100%;
    border-radius: 8px 8px 0 0;
  }
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
  margin-bottom: 15px;
`;

export const AttributeTitle = styled.p`
  font-weight: 300px;
  margin: 0;
`;

export const AttributeValue = styled.h2`
  margin: 0;
  margin-top: 0;
  /* Ajustar el tamaño de fuente para pantallas pequeñas */
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
