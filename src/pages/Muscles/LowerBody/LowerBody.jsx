import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState, useCallback } from "react";
import { Header, Layout } from "components";
import styled from "styled-components";

const [squat] = exerciseData.lowerBody;
export const LowerBody = () => {
  const [lowerBodyData, setLowerBodyDate] = useState(squat);

  const changeContent = useCallback(
    (type) => {
      setLowerBodyDate(
        exerciseData.lowerBody.find((data) => data.eName === type)
      );
    },
    []
  );
  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.lowerBody}
        changeContent={changeContent}
      />
      <ContentBox>
        <ExerciseVideo src={lowerBodyData.src} />
        <ExerciseDetail exerciseData={lowerBodyData} />
      </ContentBox>
    </Layout>
  );
};
const ContentBox = styled.div`
  display: flex;
`;
