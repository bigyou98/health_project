import {
  ExerciseDetail,
  ExerciseVideo,
  Header,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import styled from "styled-components";

export const Triceps = () => {
  const [tricepsData, setTricepsDate] = useState(
    exerciseData.triceps.cablePushDown
  );

  const changeCablePushDown = () => {
    setTricepsDate(exerciseData.triceps.cablePushDown);
  };
  const changeOverHeadExtension = () => {
    setTricepsDate(exerciseData.triceps.overHeadExtension);
  };
  return (
    <div>
      <Header />
      <Type>
        <IntoType onClick={changeCablePushDown}>케이블푸쉬다운</IntoType>{" "}
        <IntoType onClick={changeOverHeadExtension}>오버헤드익스텐션</IntoType>{" "}
      </Type>
      <ExerciseVideo src={tricepsData.src} />
      <ExerciseDetail exerciseData={tricepsData} />
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
