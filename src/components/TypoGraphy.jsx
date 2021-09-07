import React from "react";
import styled from "styled-components";

export const TypoGraphy = ({ children, type, weight }) => {
  const switchType = () => {
    switch (type) {
      case "h1":
        return "32px";
      case "h2":
        return "24px";
      default:
        return "16px";
    }
  };
  const switchWeight = () => {
    switch (weight) {
      case "bold":
        return "bold";
      default:
        return "normal";
    }
  };
  return (
    <Font size={switchType(type)} fontWeight={switchWeight(weight)}>
      {children}
    </Font>
  );
};

const Font = styled.p`
  margin-left: 8px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
`;
