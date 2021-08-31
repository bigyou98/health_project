import React from "react";
import styled from "styled-components";
import MuscleLink from "./components/MusclesLink";
import { TypoGraphy } from "components";
import { customColors } from "constants/index";

const Main = () => {
  return (
    <Wrapper>
      <TitleBox>
        <TypoGraphy type="h1" weight="bold">
          <TitleAnimation>How to Health</TitleAnimation>
        </TypoGraphy>
      </TitleBox>
      <ButtonBox>
        <MuscleLink address="/muscles/chest" muscleKoreaName="가슴" circle />
        <MuscleLink address="/muscles/back" muscleKoreaName="등" circle />
        <MuscleLink address="/muscles/shoulder" muscleKoreaName="어깨" circle />
        <MuscleLink
          address="/muscles/lowerBody"
          muscleKoreaName="하체"
          circle
        />
      </ButtonBox>
      <ButtonBox>
        <MuscleLink address="/muscles/triceps" muscleKoreaName="삼두" circle />
        <MuscleLink address="/muscles/biceps" muscleKoreaName="이두" circle />
        <MuscleLink address="/muscles/abs" muscleKoreaName="복근" circle />
      </ButtonBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: ${customColors.darkBlue};
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
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
const TitleBox = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${customColors.lightBlue};
  border-radius: 10px;
`;
const TitleAnimation = styled.span`
  animation: fadeInDown;
  animation-duration: 3s;
  color: ${customColors.yellow};
`;
export default Main;
