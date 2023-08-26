import styled from "styled-components";

export const DetailContainer = styled.div`
  padding: 50px 100px 15px 100px;

  @media screen and (max-width: 768px) {
    padding: 70px 100px 15px 100px;
    padding: 15px;
    margin-top: 80px;
  }
`;

export const DetailCard = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.9); /* rgba(30, 13, 58, 0.92) */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 30px;
  border: 3px solid #ffffff;

  @media screen and (max-width: 768px) {
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
    padding: 20px;
  }
`;

export const DetailImage = styled.img`
  flex: 1;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: flex;
    margin-top: 20px;
    margin-left: 75px;
    max-width: 65%;
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
  margin-bottom: 40px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0px;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const AttributeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const AttributeTitle = styled.p`
  font-weight: 300px;
  margin: 0;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const AttributeValue = styled.h2`
  margin: 0;
  font-size: 30px;

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
  margin-top: 50px;
  width: 70px;
  height: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
    margin-bottom: 2px;
  }
`;
