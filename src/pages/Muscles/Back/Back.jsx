import React, { useState } from "react";
import { ExerciseVideo, ExerciseDetail } from "components/Muscles_components";
import { Header,Layout } from "components";

import styled from "styled-components";
import exerciseData from "dummy/exerciseData";

export const Back = () => {
  const [backData, setBackData] = useState(exerciseData.back.deadLift);
  const changeContent = (type) => {
    setBackData(exerciseData.back[type]);
  };
  return (
    <Layout>
      <Header />
      <Type>
        <IntoType onClick={() => changeContent("deadLift")}>
          데드리프트
        </IntoType>{" "}
        <IntoType onClick={() => changeContent("latPullDown")}>
          랫풀다운
        </IntoType>{" "}
        <IntoType onClick={() => changeContent("pullUp")}>풀업</IntoType>
      </Type>
      <ExerciseVideo src={backData.src} />
      <ExerciseDetail exerciseData={backData} />
    </Layout>
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
