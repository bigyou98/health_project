import { ExerciseDetail, ExerciseVideo } from "components/Muscles_components";
import { Header } from "components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import styled from "styled-components";

export const Biceps = () => {
  const [bicepsDate, setBicepsData] = useState(exerciseData.biceps.babelCurl);

  const changeContent = (type) => {
    setBicepsData(exerciseData.biceps[type]);
  };
  return (
    <div>
      <Header />
      <Type>
        <IntoType onClick={() => changeContent("babelCurl")}>바벨컬</IntoType>{" "}
        <IntoType onClick={() => changeContent("hammerCurl")}>해머컬</IntoType>{" "}
      </Type>
      <ExerciseVideo src={bicepsDate.src} />
      <ExerciseDetail exerciseData={bicepsDate} />
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
