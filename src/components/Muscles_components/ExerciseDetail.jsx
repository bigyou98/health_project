import React from "react";
import styled from "styled-components";
import { TypoGrapy } from "components";
export const ExerciseDetail = ({ exerciseData }) => {
  return (
    <Detail>
      <TypoGrapy type="h1">운동 방법</TypoGrapy>
      <ol>
        {exerciseData.exerciseMethod.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ol>
      <TypoGrapy type="h2">좋은 자세</TypoGrapy>
      <ul>
        {exerciseData.goodPostureContent.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>
      <TypoGrapy type="h2">나쁜 자세</TypoGrapy>
      <ul>
        {exerciseData.badPostureContent.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>
    </Detail>
  );
};
const Detail = styled.div`
  float: right;
  border: 1px solid black;
  margin: 30px 30px;
  width: 700px;
  height: 700px;
  overflow-y: auto;
`;

const Big = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-left: 8px;
`;
