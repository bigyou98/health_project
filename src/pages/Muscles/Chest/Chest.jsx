import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import { ExerciseVideo, ExerciseDetail } from "components/Muscles_components";

export const Chest = () => {
  const [chestData, setChestData] = useState(exerciseData.chest.benchPress);
  const changeBenchPress = () => {
    setChestData(exerciseData.chest.benchPress);
  };
  const changeChestPress = () => {
    setChestData(exerciseData.chest.chestPress);
  };
  const changePly = () => {
    setChestData(exerciseData.chest.ply);
  };
  return (
    <div>
      <Header />
      <Type>
        <ChestType onClick={changeBenchPress}>벤치프레스</ChestType>{" "}
        <ChestType onClick={changeChestPress}>체스트프레스</ChestType>{" "}
        <ChestType onClick={changePly}>플라이</ChestType>
      </Type>
      <ExerciseVideo src={chestData.src}></ExerciseVideo>
      <ExerciseDetail exerciseData={chestData} />
    </div>
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

const Video = styled.iframe`
  margin: 30px 30px;
  width: 1080px;
  height: 700px;
`;
const Detail = styled.div`
  float: right;
  border: 1px solid black;
  margin: 30px 30px;
  width: 700px;
  height: 700px;
  overflow-y: auto;
`;

const Big = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-left: 8px;
`;
const Big2 = styled.p`
  margin-left: 8px;
  font-size: 24px;
  font-weight: bold;
`;
