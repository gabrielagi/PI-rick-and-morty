import React from "react";
import {
  ProfileContainer,
  ProfileInfo,
  ProfileImage,
  GifWrapper,
  Gif,
  LinksList,
} from "./About.styled-component";

import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileImage
          src="https://avatars.githubusercontent.com/u/48634426?s=400&u=a8e43bd90c72385e8e7cc5b1e3f3cf9b2ba34f2f&v=4"
          alt="Gif 1"
        />
        <h3>Nombre del Desarrollador(a)</h3>
        <p>
          Aquí puedes escribir una descripción sobre la desarrolladora web full
          stack. Puedes mencionar sus habilidades, experiencia y cualquier otra
          información relevante.
        </p>
        <GifWrapper>
          {/* <Gif
            src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif"
            alt="Gif 1"
          /> */}
          <Gif
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="Github"
          />
          <Gif
            src="https://www.svgrepo.com/show/521725/linkedin.svg"
            alt="LinkedIn"
          />
          <Gif
            src="https://www.svgrepo.com/show/15898/behance.svg"
            alt="Behance"
          />
          <Gif
            src="https://www.svgrepo.com/show/488179/email.svg"
            alt="Email"
          />
          {/* Agrega más gifs animados aquí si lo deseas */}
        </GifWrapper>
        <LinksList>
          <NavLink to="/about">
            <button>About</button>
          </NavLink>
          <NavLink to="/home">
            <button>Home</button>
          </NavLink>
        </LinksList>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default About;
