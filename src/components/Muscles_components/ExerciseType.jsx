import React from "react";
import { TypoGraphy } from "components";
import styled from "styled-components";
import { customColors } from "constants/index";

export const ExerciseType = ({ exerciseType, changeContent }) => {
  return (
    <Type>
      {exerciseType.map(({ name, eName }) => (
        <IntoType onClick={() => changeContent(eName)}>
          <TypoGraphy type="h2" weight="bold">
            {name}
          </TypoGraphy>
        </IntoType>
      ))}
    </Type>
  );
};

const Type = styled.div`
  display: flex;
  user-select: none;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0px;
  margin-left: 30px;
  margin-bottom: -30px;
`;

const IntoType = styled.span`
  &:hover {
    color: ${customColors.yellow};
    cursor: pointer;
  }
`;
