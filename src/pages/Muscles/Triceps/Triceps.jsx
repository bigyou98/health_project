import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import { Header, Layout } from "components";
import styled from "styled-components";

// 배열 비구조화
const [cablePushDown] = exerciseData.triceps;

export const Triceps = () => {
  const [tricepsData, setTricepsDate] = useState(cablePushDown);

  const changeContent = (type) => {
    setTricepsDate(exerciseData.triceps.find((data) => data.eName === type));
  };

  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.triceps}
        changeContent={changeContent}
      />
      <ContentBox>
        <ExerciseVideo src={tricepsData.src} />
        <ExerciseDetail exerciseData={tricepsData} />
      </ContentBox>
    </Layout>
  );
};
const ContentBox = styled.div`
  display: flex;
`;
