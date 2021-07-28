import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <h1>부위별 운동 방법</h1>
      <ButtonBox>
        <MuscleButton>가슴</MuscleButton>
        <MuscleButton>등</MuscleButton>
        <MuscleButton>어깨</MuscleButton>
        <MuscleButton>하체</MuscleButton>
      </ButtonBox>
      <ButtonBox>
        <MuscleButton>삼두</MuscleButton>
        <MuscleButton>이두</MuscleButton>
        <MuscleButton>복근</MuscleButton>
      </ButtonBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 930px;
`;
const ButtonBox = styled.div`
  display: block;
`;

const MuscleButton = styled.button`
  width: 250px;
  height: 250px;
  margin: 50px;
  border-radius: 50%;
`;
export default Main;
