import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import { Header, Layout } from "components";

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
      <ExerciseVideo src={shoulderData.src} />
      <ExerciseDetail exerciseData={shoulderData} />v
    </Layout>
  );
};
