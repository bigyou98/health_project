import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../../components/Muscles_components";
import exerciseData from "../../../dummy/exerciseData";

export const Chest = () => {
  const [chestData, setChestData] = useState(exerciseData.chest.benchPress);
  const changeBenchPress = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    setChestData(exerciseData.chest.benchPress);
  };
  const changeChestPress = () => {
    setChestData(exerciseData.chest.chestPress);
  };
  const changePly = () => {
    setChestData(exerciseData.chest.ply);
  };
  // props의 name이나 key를 활용해서 해보자

  return (
    <div>
      <Header />
      <Type>
        <ChestType name="bentz" onClick={changeBenchPress}>
          벤치프레스
        </ChestType>{" "}
        <ChestType onClick={changeChestPress}>체스트프레스</ChestType>{" "}
        <ChestType onClick={changePly}>플라이</ChestType>
      </Type>
      <Video src={chestData.src}></Video>

      <Detail>
        <Big>운동방법</Big>
        <ol>
          {chestData.exerciseMethod.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ol>
        <Big2>좋은 자세</Big2>
        <ul>
          {chestData.goodPostureContent.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
        <Big2>나쁜 자세</Big2>
        <ul>
          {chestData.badPostureContent.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </Detail>
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
