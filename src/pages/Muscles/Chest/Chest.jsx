import React, { useState } from "react";
import { Header, Layout } from "components";
import exerciseData from "dummy/exerciseData";
import {
  ExerciseVideo,
  ExerciseDetail,
  ExerciseType,
} from "components/Muscles_components";
import styled from "styled-components";

const [benchPress] = exerciseData.chest;
export const Chest = () => {
  const [chestData, setChestData] = useState(benchPress);

  const changeContent = (type) => {
    setChestData(exerciseData.chest.find((data) => data.eName === type));
  };
  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.chest}
        changeContent={changeContent}
      />
      <ContentBox>
        <ExerciseVideo src={chestData.src}></ExerciseVideo>
        <ExerciseDetail exerciseData={chestData} />
      </ContentBox>
    </Layout>
  );
};

const ContentBox = styled.div`
  display: flex;
`;
