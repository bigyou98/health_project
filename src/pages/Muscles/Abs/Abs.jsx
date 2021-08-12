import {
  ExerciseDetail,
  ExerciseVideo,
  Header,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import styled from "styled-components";

export const Abs = () => {
  const [absData, setAbsData] = useState(exerciseData.abs.crunches);

  const changeCrunches = () => {
    setAbsData(exerciseData.abs.crunches);
  };
  const changeReverseCrunches = () => {
    setAbsData(exerciseData.abs.reverseCrunches);
  };
  return (
    <div>
      <Header />
      <Type>
        <IntoType onClick={changeCrunches}>크런치</IntoType>{" "}
        <IntoType onClick={changeReverseCrunches}>리버스크런치</IntoType>{" "}
      </Type>
      <ExerciseVideo src={absData.src} />
      <ExerciseDetail exerciseData={absData} />
    </div>
  );
};

const Type = styled.div`
  user-select: none;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0px;
  margin: 0 30px;
`;
const IntoType = styled.span`
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
