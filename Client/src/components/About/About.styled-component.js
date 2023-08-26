import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 30px 25px 0px 25px;
  }
`;

export const ProfileInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 700px;
  padding: 50px;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 25px;
  }
`;
export const ProfileText = styled.p`
  font-size: 16px;
  padding: 5px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 3px;
  }
`;

export const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin: 10px;

  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 5px;
  background: linear-gradient(45deg, #ff0000, #42b883, #ffffff, #ff0000);
  /* border: 4px solid #39ff14; */

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 5px 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.2s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;
