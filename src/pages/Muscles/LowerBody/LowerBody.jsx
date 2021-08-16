import {
  ExerciseDetail,
  ExerciseVideo,
  ExerciseType,
} from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import { Header, Layout } from "components";

const [squat] = exerciseData.lowerBody;
export const LowerBody = () => {
  const [lowerBodyData, setLowerBodyDate] = useState(squat);

  const changeContent = (type) => {
    setLowerBodyDate(
      exerciseData.lowerBody.find((data) => data.eName === type)
    );
  };
  return (
    <Layout>
      <Header />
      <ExerciseType
        exerciseType={exerciseData.lowerBody}
        changeContent={changeContent}
      />
      <ExerciseVideo src={lowerBodyData.src} />
      <ExerciseDetail exerciseData={lowerBodyData} />
    </Layout>
  );
};
