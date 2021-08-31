import React from "react";
import styled from "styled-components";
import { HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import MusclesLink from "../pages/Main/components/MusclesLink";
import { customColors } from "constants/index";

export const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <HomeLogo>
          <HomeFilled style={{ color: "white" }} />
        </HomeLogo>
      </Link>

      <MuscleList>
        {" "}
        <MusclesLink address="/muscles/chest" muscleKoreaName="가슴" />
        <MusclesLink address="/muscles/back" muscleKoreaName="등" />
        <MusclesLink address="/muscles/shoulder" muscleKoreaName="어깨" />
        <MusclesLink address="/muscles/lowerBody" muscleKoreaName="하체" />
        <MusclesLink address="/muscles/triceps" muscleKoreaName="삼두" />
        <MusclesLink address="/muscles/biceps" muscleKoreaName="이두" />
        <MusclesLink address="/muscles/abs" muscleKoreaName="복근" />
      </MuscleList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 48px;
  background-color: ${customColors.darkBlue};
  color: white;
`;
const HomeLogo = styled.button`
  font-size: 32px;
  color: "white";
  background: transparent;
  border: none;
  margin-left: 30px;
  cursor: pointer;
  transition: transform, 500ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const MuscleList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  font-weight: bold;
  font-size: 20px;
  margin-right: 80px;
`;
