import React from "react";
import styled from "styled-components";
import MuscleLinkButton from "./components/MusclesLinkButton";

const Main = () => {
  return (
    <Wrapper>
      <h1>부위별 운동 방법</h1>
      <ButtonBox>
        <MuscleLinkButton address="/muscles/chest" muscleKoreaName="가슴" />
        <MuscleLinkButton address="/muscles/back" muscleKoreaName="등" />
        <MuscleLinkButton address="//muscles/shoulder" muscleKoreaName="어깨" />
        <MuscleLinkButton
          address="//muscles/lowerBody"
          muscleKoreaName="하체"
        />
      </ButtonBox>
      <ButtonBox>
        <MuscleLinkButton address="/muscles/triceps" muscleKoreaName="삼두" />
        <MuscleLinkButton address="//muscles/biceps" muscleKoreaName="이두" />
        <MuscleLinkButton address="/muscles/abs" muscleKoreaName="복근" />
      </ButtonBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ButtonBox = styled.div`
  display: block;
`;

export default Main;
