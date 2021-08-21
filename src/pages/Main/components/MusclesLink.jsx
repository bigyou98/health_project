import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  user-select: none;
  width: 250px;
  height: 250px;
  margin: 50px;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  transition: transform, 500ms ease-in-out;
  border: 1px solid black;
  background: gray;
  &:hover {
    transform: scale(1.2);
    border: 3px solid black;
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const MuscleNameButton = styled.p`
  transition: transform, 500ms ease-in-out;
  user-select: none;
  color: black;
  &:hover {
    transform: scale(1.2);
    text-decoration: none;
    color: white;
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
