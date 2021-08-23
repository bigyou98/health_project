import { Header, Layout } from "components";
import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

const [crunches] = exerciseData.abs;
export const Abs = () => {
  const [absData, setAbsData] = useState(crunches);

  const changeContent = useCallback(
    (type) => {
      setAbsData(exerciseData.abs.find((data) => data.eName === type));
    },
    []
  );

  // Header, ExerciseType가 변경되면 안됨
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
