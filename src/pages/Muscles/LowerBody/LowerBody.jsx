import {
  ExerciseDetail,
  ExerciseVideo,
  Header,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import styled from "styled-components";

export const LowerBody = () => {
  const [lowerBodyData, setLowerBodyDate] = useState(
    exerciseData.lowerBody.squat
  );

  const changeSquat = () => {
    setLowerBodyDate(exerciseData.lowerBody.squat);
  };
  const changeLegCurl = () => {
    setLowerBodyDate(exerciseData.lowerBody.legCurl);
  };
  const changeLegExtension = () => {
    setLowerBodyDate(exerciseData.lowerBody.legExtension);
  };
  return (
    <div>
      <Header />
      <Type>
        <IntoType onClick={changeSquat}>스쿼트</IntoType>{" "}
        <IntoType onClick={changeLegCurl}>레그컬</IntoType>{" "}
        <IntoType onClick={changeLegExtension}>레그익스텐션</IntoType>{" "}
      </Type>
      <ExerciseVideo src={lowerBodyData.src} />
      <ExerciseDetail exerciseData={lowerBodyData} />
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
