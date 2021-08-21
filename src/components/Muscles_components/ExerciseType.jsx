import React from "react";
import { TypoGraphy } from "components";
import styled from "styled-components";

export const ExerciseType = ({ exerciseType, changeContent }) => {
  return (
    <Type>
      {exerciseType.map(({ name, eName }) => (
        <IntoType onClick={() => changeContent(eName)}>
          <TypoGraphy type="h2">{name}</TypoGraphy>
        </IntoType>
      ))}
    </Type>
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
