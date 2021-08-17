import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import { Header, Layout } from "components";
import styled from "styled-components";

const [militaryPress] = exerciseData.shoulder;
export const Shoulder = () => {
  const [shoulderData, setShoulderData] = useState(militaryPress);

  const changeContent = (type) => {
    setShoulderData(exerciseData.triceps.find((data) => data.eName === type));
  };

  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.shoulder}
        changeContent={changeContent}
      />
      <ContentBox>
        <ExerciseVideo src={shoulderData.src} />
        <ExerciseDetail exerciseData={shoulderData} />v
      </ContentBox>
    </Layout>
  );
};
const ContentBox = styled.div`
  display: flex;
`;
