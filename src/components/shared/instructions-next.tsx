import React from "react";
import styled from "styled-components";

import Instructions from "./instructions"; 

const InstructionsNextStyled = styled(Instructions)`
  margin-top: 45px;
`;

const InstructionsNext = props => {
  const { children } = props;
  return (
    <InstructionsNextStyled
      {...props}
    >
      {children}
    </InstructionsNextStyled>
  );
};

export default InstructionsNext;
