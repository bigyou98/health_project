import React from "react";
import styled from "styled-components";

export const ExerciseVideo = ({ src }) => {
  return <Video src={src} />;
};

const Video = styled.iframe`
  margin: 30px 30px;
  width: 1080px;
  height: 700px;
`;
