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
`;

export const ProfileInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide */
    max-width: 400px;
  }
`;

export const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #ff0000, #42b883, #ffffff, #ff0000);
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
