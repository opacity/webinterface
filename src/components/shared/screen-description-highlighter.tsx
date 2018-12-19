import React from "react";
import styled from "styled-components";

const ScreenDescriptionHighlighterStyled = styled.span`
  font-weight: bold;
  color: #af8ecb;
`;

const ScreenDescriptionHighlighter = props => {
  const { children } = props;
  return (
    <ScreenDescriptionHighlighterStyled
      {...props}
    >
      {children}
    </ScreenDescriptionHighlighterStyled>
  );
};

export default ScreenDescriptionHighlighter;
