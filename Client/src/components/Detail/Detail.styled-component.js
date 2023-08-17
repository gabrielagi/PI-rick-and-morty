import styled from "styled-components";

export const DetailContainer = styled.div`
  padding: 20px 130px 50px 130px;

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    padding: 20px;
    margin-top: 70px;
  }
`;

export const DetailCard = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.9); /* rgba(30, 13, 58, 0.92) */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 30px; /* Margen superior de 20px */
  border: 3px solid #ffffff;

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
  flex: 1;
  flex-direction: column;
  justify-content: center; /* Centrar verticalmente */

  @media screen and (max-width: 768px) {
    color: #fff;
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
    max-width: 75%;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const TitleWrapper = styled.div`
  background-color: #8df904;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0px;
    font-size: 18px;
  }
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const AttributeTitle = styled.p`
  font-weight: 300px;
  margin: 0;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const AttributeValue = styled.h2`
  margin: 0;
  margin-top: 0;
  font-size: 22px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const BackButton = styled.button`
  background-color: red;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 70px;
  height: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
    margin-bottom: 2px;
  }
`;
