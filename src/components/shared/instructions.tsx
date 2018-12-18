import React from "react";
import styled from "styled-components";

const InstructionsStyled = styled.p`
  margin-top: 75px;
  width: 460px;
  height: 66px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const Instructions = props => {
  const { children } = props;
  return (
    <InstructionsStyled
      {...props}
    >
      {children}
    </InstructionsStyled>
  );
};

export default Instructions;
