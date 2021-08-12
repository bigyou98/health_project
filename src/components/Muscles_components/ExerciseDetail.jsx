import React from "react";
import styled from "styled-components";

export const ExerciseDetail = ({ exerciseData }) => {
  return (
    <Detail>
      <Big>운동방법</Big>
      <ol>
        {exerciseData.exerciseMethod.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ol>
      <Big2>좋은 자세</Big2>
      <ul>
        {exerciseData.goodPostureContent.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>
      <Big2>나쁜 자세</Big2>
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
const Big2 = styled.p`
  margin-left: 8px;
  font-size: 24px;
  font-weight: bold;
`;
