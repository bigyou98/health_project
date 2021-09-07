import React from "react";
import styled from "styled-components";
import { TypoGraphy } from "components";
export const ExerciseDetail = React.memo(({ exerciseData }) => {
  return (
    <Detail>
      <TypoGraphy type="h1" weight="bold">
        운동 방법
      </TypoGraphy>
      <ol>
        {exerciseData.exerciseMethod.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ol>
      <TypoGraphy type="h2" weight="bold">
        좋은 자세
      </TypoGraphy>
      <ul>
        {exerciseData.goodPostureContent.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>
      <TypoGraphy type="h2" weight="bold">
        나쁜 자세
      </TypoGraphy>
      <ul>
        {exerciseData.badPostureContent.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>
    </Detail>
  );
});
const Detail = styled.div`
  background-color: white;
  float: right;
  border-radius: 10px;
  margin: 30px 30px;
  width: 700px;
  height: 700px;
  overflow-y: auto;
  box-shadow: 26px 25px 31px -6px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 26px 25px 31px -6px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 26px 25px 31px -6px rgba(0, 0, 0, 0.71);
`;
