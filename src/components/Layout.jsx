import React from "react";
import styled from "styled-components";
import { customColors } from "constants/index";

export const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${customColors.lightBlue};
  width: 100vw;
  height: 100vh;
  user-select: none;
`;
