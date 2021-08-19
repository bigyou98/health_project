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
  transition: transform, 500ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const MuscleNameButton = styled.p`
  transition: transform, 500ms ease-in-out;
  user-select: none;
  color: black;
  &:hover {
    transform: scale(1.2);
    text-decoration: none !important; // 적용 안됨
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
