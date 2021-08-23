import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import { Header, Layout } from "components";
import exerciseData from "dummy/exerciseData";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

const [babelCurl] = exerciseData.biceps;

export const Biceps = () => {
  const [bicepsDate, setBicepsData] = useState(babelCurl);

  const changeContent = useCallback(
    (type) => {
      setBicepsData(exerciseData.biceps.find((data) => data.eName === type));
    },
    []
  );
  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.biceps}
        changeContent={changeContent}
      />
      <ContentBox>
        <ExerciseVideo src={bicepsDate.src} />
        <ExerciseDetail exerciseData={bicepsDate} />
      </ContentBox>
    </Layout>
  );
};
const ContentBox = styled.div`
  display: flex;
`;
