import React, { useState } from "react";
import {
  ExerciseVideo,
  ExerciseDetail,
  Header,
} from "components/Muscles_components";
import styled from "styled-components";
import exerciseData from "dummy/exerciseData";

export const Back = () => {
  const [backData, setBackData] = useState(exerciseData.back.deadLift);
  const changeDeadLift = () => {
    setBackData(exerciseData.back.deadLift);
  };
  const changeLatPullDown = () => {
    setBackData(exerciseData.back.latPullDown);
  };
  const changePullUp = () => {
    setBackData(exerciseData.back.pullUp);
  };
  return (
    <div>
      <Header />
      <Type>
        <IntoType onClick={changeDeadLift}>데드리프트</IntoType>{" "}
        <IntoType onClick={changeLatPullDown}>랫풀다운</IntoType>{" "}
        <IntoType onClick={changePullUp}>풀업</IntoType>
      </Type>
      <ExerciseVideo src={backData.src} />
      <ExerciseDetail exerciseData={backData} />
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
