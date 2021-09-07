import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { customColors } from "constants/index";
import "animate.css";

const MusclesLink = ({ address, muscleKoreaName, circle = false }) => {
  return (
    <StyledLink to={address}>
      {circle ? (
        <MuscleButton>{muscleKoreaName}</MuscleButton>
      ) : (
        <MuscleNameButton>{muscleKoreaName}</MuscleNameButton>
      )}
    </StyledLink>
  );
};

const MuscleButton = styled.button`
  width: 250px;
  height: 250px;
  margin: 50px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    animation: swing;
    animation-duration: 1s;
    color: ${customColors.yellow};
    font-weight: bold;
    background: rgb(67, 195, 226);
    background: radial-gradient(
      circle,
      rgba(67, 195, 226, 1) 41%,
      rgba(6, 80, 196, 1) 95%
    );
  }
`;

const MuscleNameButton = styled.p`
  transition: transform, 500ms ease-in-out;
  color: white;
  &:hover {
    transform: scale(1.2);
    text-decoration: none;
    color: yellow;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:link {
    color: blue;
  }
  &:visited {
    color: green;
  }
`;

export default MusclesLink;
