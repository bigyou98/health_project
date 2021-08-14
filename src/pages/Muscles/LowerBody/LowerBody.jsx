import { ExerciseDetail, ExerciseVideo } from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import { Header } from "components";
import styled from "styled-components";

export const LowerBody = () => {
  const [lowerBodyData, setLowerBodyDate] = useState(
    exerciseData.lowerBody.squat
  );

  const changeContent = (type) => {
    setLowerBodyDate(exerciseData.lower[type]);
  };
  return (
    <div>
      <Header />
      <Type>
        <IntoType onClick={() => changeContent("squat")}>스쿼트</IntoType>{" "}
        <IntoType onClick={() => changeContent("legCurl")}>레그컬</IntoType>{" "}
        <IntoType onClick={() => changeContent("legExtension")}>
          레그익스텐션
        </IntoType>{" "}
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
