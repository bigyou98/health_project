import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import { Header, Layout } from "components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";

const [babelCurl] = exerciseData.biceps;

export const Biceps = () => {
  const [bicepsDate, setBicepsData] = useState(babelCurl);

  const changeContent = (type) => {
    setBicepsData(exerciseData.biceps.find((data) => data.eName === type));
  };
  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.biceps}
        changeContent={changeContent}
      />
      <ExerciseVideo src={bicepsDate.src} />
      <ExerciseDetail exerciseData={bicepsDate} />
    </Layout>
  );
};
