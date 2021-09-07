import React from "react";
import styled from "styled-components";

export const ExerciseVideo = React.memo(({ src }) => {
  return <Video src={src} />;
});

const Video = styled.iframe`
  margin: 30px 30px;
  width: 1080px;
  height: 700px;
  border-radius: 10px;
  box-shadow: 26px 25px 31px -6px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 26px 25px 31px -6px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 26px 25px 31px -6px rgba(0, 0, 0, 0.71);
`;
