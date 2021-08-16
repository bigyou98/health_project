import React, { useState } from "react";
import { Header, Layout } from "components";
import exerciseData from "dummy/exerciseData";
import {
  ExerciseVideo,
  ExerciseDetail,
  ExerciseType,
} from "components/Muscles_components";

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
      <ExerciseVideo src={chestData.src}></ExerciseVideo>
      <ExerciseDetail exerciseData={chestData} />
    </Layout>
  );
};
