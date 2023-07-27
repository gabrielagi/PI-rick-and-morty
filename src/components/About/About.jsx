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
        <h3>Gabriela Iriart</h3>
        <p>
          ¡Hola! Soy una desarrolladora de software Full Stack apasionada por
          crear soluciones tecnológicas innovadoras que mejoren la experiencia
          del usuario, enfocada en el diseño centrado en el usuario y la
          usabilidad, buscando el equilibrio perfecto entre funcionalidad y
          estética en cada proyecto.
        </p>
        <GifWrapper>
          {/* <Gif
            src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif"
            alt="Gif 1"
          /> */}
          {/* Agrega más gifs animados aquí */}
        </GifWrapper>
        <LinksList>
          <a href="https://github.com/gabrielagi">
            <Gif
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="Github"
            />
          </a>
          <a href="https://www.linkedin.com/in/gabriela-iriart/">
            <Gif
              src="https://www.svgrepo.com/show/521725/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.behance.net/gabrielairiart">
            <Gif
              src="https://www.svgrepo.com/show/15898/behance.svg"
              alt="Behance"
            />
          </a>
          <a href="https://www.linkedin.com/in/gabriela-iriart/">
            <Gif
              src="https://www.svgrepo.com/show/488179/email.svg"
              alt="Email"
            />
          </a>
        </LinksList>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default About;
