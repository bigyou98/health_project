import React from "react";
import styled from "styled-components";
import MuscleLink from "./components/MusclesLink";
import { TypoGraphy } from "components";
import background from "images/background.jpg";

const Main = () => {
  return (
    <Wrapper>
      <TypoGraphy type="h1" weight="bold">
        부위별 운동방법
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
  background: rgb(1, 1, 1);
  background: radial-gradient(
    circle,
    rgba(1, 1, 1, 1) 0%,
    rgba(221, 221, 221, 1) 100%
  );
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
