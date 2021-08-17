import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MusclesLink = ({ address, muscleKoreaName, circle = false }) => {
  return (
    <Link to={address}>
      {circle ? (
        <MuscleButton>{muscleKoreaName}</MuscleButton>
      ) : (
        <MuscleNameButton>{muscleKoreaName}</MuscleNameButton>
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

const MuscleNameButton = styled.p`
  transition: transform, 500ms ease-in-out;
  user-select: none;
  // black로 지정안하면 보라색임 : visited 라는 뜻인거같음
  color: black;
  &:hover {
    transform: scale(1.2);
    text-decoration: none; // 적용 안됨
  }
  // 밑에것들 적용 안됨
  /* &:link {
    color: blue;
    text-decoration: none;
  }
  &:visited {
    color: green;
    text-decoration: none;
  } */
`;
export default MusclesLink;
