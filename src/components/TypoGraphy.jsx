import React from "react";
import styled from "styled-components";

export const TypoGraphy = ({ children, type }) => {
  return <Font isStyle={type}>{children}</Font>;
};

// p로 하니까 영역으로 되서 span으로 바꿈
const Font = styled.span`
  margin-left: 8px;
  user-select: none;
  ${(props) =>
    props.isStyle === "h1" &&
    `
    font-size: 32px;
    font-weight: bold;
  `}
  ${(props) =>
    props.isStyle === "h2" &&
    `font-size: 24px;
    font-weight: bold; `}
`;