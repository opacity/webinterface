import React from "react";
import styled from "styled-components";

const InstructionsHighlighterStyled = styled.span`
  font-weight: bold;
  color: #af8ecb;
`;

const InstructionsHighlighter = props => {
  const { children } = props;
  return (
    <InstructionsHighlighterStyled
      {...props}
    >
      {children}
    </InstructionsHighlighterStyled>
  );
};

export default InstructionsHighlighter;
