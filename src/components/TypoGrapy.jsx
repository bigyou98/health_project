import React from "react";
import styled from "styled-components";

export const TypoGrapy = ({ children, type }) => {
  return <Qqq isStyle={type}>{children}</Qqq>;
};

const Qqq = styled.p`
  ${(props) => props.isStyle === "h1" && `color:red;`}
`;
