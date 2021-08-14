import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MusclesLink = ({ address, muscleKoreaName, circle = false }) => {
  return (
    <Link to={address}>
      {circle ? (
        <MuscleButton>{muscleKoreaName}</MuscleButton>
      ) : (
        <div>{muscleKoreaName}</div>
      )}
    </Link>
  );
};

const MuscleButton = styled.button`
  width: 250px;
  height: 250px;
  margin: 50px;
  border-radius: 50%;
  transition: transform, 500ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
export default MusclesLink;
