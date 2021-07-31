import React from "react";
import styled from "styled-components";
import { Header } from "../../../components/Muscles_components";
export const Abs = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
