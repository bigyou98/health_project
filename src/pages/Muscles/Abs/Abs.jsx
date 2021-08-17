import { Header, Layout } from "components";
import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import styled from "styled-components";

const [aaa] = exerciseData.abs;
export const Abs = () => {
  const [absData, setAbsData] = useState(aaa);

  const changeContent = (type) => {
    setAbsData(exerciseData.abs.find((data) => data.eName === type));
  };
  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.abs}
        changeContent={changeContent}
      />
      <ContentBox>
        <ExerciseVideo src={absData.src} />
        <ExerciseDetail exerciseData={absData} />
      </ContentBox>
    </Layout>
  );
};
const ContentBox = styled.div`
  display: flex;
`;
