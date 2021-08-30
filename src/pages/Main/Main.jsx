import React from "react";
import styled from "styled-components";
import MuscleLink from "./components/MusclesLink";
import { TypoGraphy } from "components";
import background from "images/background.jpg";
import { customColors } from "constants/index";

const Main = () => {
  return (
    <Wrapper>
      <TypoGraphy type="h1" weight="bold">
        How to Health
      </TypoGraphy>
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
  /* background-image: url(${background}); */
  // 고칠거야
  background-color: ${customColors.mainColor};
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
export default Main;
