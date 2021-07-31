import React from "react";
import styled from "styled-components";
import MuscleLink from "./components/MusclesLink";

const Main = () => {
  return (
    <Wrapper>
      <h1>부위별 운동 방법</h1>
      <ButtonBox>
        <MuscleButton>
          <MuscleLink address="/muscles/chest" muscleKoreaName="가슴" />{" "}
        </MuscleButton>
        <MuscleButton>
          <MuscleLink address="/muscles/back" muscleKoreaName="등" />
        </MuscleButton>
        <MuscleButton>
          <MuscleLink address="//muscles/shoulder" muscleKoreaName="어깨" />
        </MuscleButton>
        <MuscleButton>
          <MuscleLink address="//muscles/lowerBody" muscleKoreaName="하체" />
        </MuscleButton>
      </ButtonBox>
      <ButtonBox>
        <MuscleButton>
          <MuscleLink address="/muscles/triceps" muscleKoreaName="삼두" />
        </MuscleButton>
        <MuscleButton>
          <MuscleLink address="//muscles/biceps" muscleKoreaName="이두" />
        </MuscleButton>
        <MuscleButton>
          <MuscleLink address="/muscles/abs" muscleKoreaName="복근" />
        </MuscleButton>
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
const MuscleButton = styled.button`
  width: 250px;
  height: 250px;
  margin: 50px;
  border-radius: 50%;
  transition: transform, 500ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
export default Main;
