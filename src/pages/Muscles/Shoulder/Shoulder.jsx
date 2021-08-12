import {
  ExerciseDetail,
  ExerciseVideo,
  Header,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import styled from "styled-components";

export const Shoulder = () => {
  const [shoulderData, setShoulderData] = useState(
    exerciseData.shoulder.militaryPress
  );

  const changeMilitaryPress = () => {
    setShoulderData(exerciseData.shoulder.militaryPress);
  };
  const changeSideLateralRaise = () => {
    setShoulderData(exerciseData.shoulder.sideLateralRaise);
  };
  const changeBentOverLateralRaise = () => {
    setShoulderData(exerciseData.shoulder.bentOverLateralRaise);
  };
  return (
    <div>
      <Header />
      <Type>
        <IntoType onClick={changeMilitaryPress}>밀리터리프레스</IntoType>{" "}
        <IntoType onClick={changeSideLateralRaise}>사이드레터럴레이즈</IntoType>{" "}
        <IntoType onClick={changeBentOverLateralRaise}>
          벤트오버레터럴레이즈
        </IntoType>{" "}
      </Type>
      <ExerciseVideo src={shoulderData.src} />
      <ExerciseDetail exerciseData={shoulderData} />v
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
