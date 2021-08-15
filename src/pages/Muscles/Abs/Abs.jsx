import { Header,Layout } from 'components';
import { ExerciseDetail, ExerciseVideo } from "components/Muscles_components";
import exerciseData from "dummy/exerciseData";
import React, { useState } from "react";
import styled from "styled-components";
export const Abs = () => {
  const [absData, setAbsData] = useState(exerciseData.abs.crunches);

  const changeContent = (type) => {
    setAbsData(exerciseData.abs[type]);
  };
  return (
    <Layout>
      <Header />
      <Type>
        <IntoType onClick={() => changeContent("crunches")}>크런치</IntoType>{" "}
        <IntoType onClick={() => changeContent("reverseCrunches")}>
          리버스크런치
        </IntoType>{" "}
      </Type>
      <ExerciseVideo src={absData.src} />
      <ExerciseDetail exerciseData={absData} />
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
const IntoType = styled.span`
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
