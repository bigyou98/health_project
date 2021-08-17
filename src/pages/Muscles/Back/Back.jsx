import React, { useState } from "react";
import {
  ExerciseVideo,
  ExerciseDetail,
  ExerciseType,
} from "components/Muscles_components";
import { Header, Layout } from "components";
import exerciseData from "dummy/exerciseData";
import styled from "styled-components";

const [deadLift] = exerciseData.back;
export const Back = () => {
  const [backData, setBackData] = useState(deadLift);
  const changeContent = (type) => {
    setBackData(exerciseData.back.find((data) => data.eName === type));
  };
  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.back}
        changeContent={changeContent}
      />
      <ContentBox>
        <ExerciseVideo src={backData.src} />
        <ExerciseDetail exerciseData={backData} />
      </ContentBox>
    </Layout>
  );
};
const ContentBox = styled.div`
  display: flex;
`;
