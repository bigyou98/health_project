import React, { useState } from "react";
import styled from "styled-components";
import { Header, Layout } from "components";
import exerciseData from "dummy/exerciseData";
import { ExerciseVideo, ExerciseDetail } from "components/Muscles_components";

export const Chest = () => {
  const [chestData, setChestData] = useState(exerciseData.chest.benchPress);

  const changeContent = (type) => {
    setChestData(exerciseData.chest[type]);
  };
  return (
    <Layout>
      <Header />
      <Type>
        <ChestType onClick={() => changeContent("benchPress")}>
          벤치프레스
        </ChestType>{" "}
        <ChestType onClick={() => changeContent("chestPress")}>
          체스트프레스
        </ChestType>{" "}
        <ChestType onClick={() => changeContent("ply")}>플라이</ChestType>
      </Type>
      <ExerciseVideo src={chestData.src}></ExerciseVideo>
      <ExerciseDetail exerciseData={chestData} />
    </Layout>
  );
};
const Type = styled.div`
  user-select: none;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0px;
  margin: 0 30px;
`;
const ChestType = styled.span`
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
