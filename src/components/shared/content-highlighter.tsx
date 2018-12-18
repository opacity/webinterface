import React from "react";
import styled from "styled-components";

const ContentHighlighterStyled = styled.div`
  height: 25px;
  background-color: #232b40;
  margin-bottom: 50px;
`;

const ContentHighlighter = props => {
  const { children } = props;
  return (
    <ContentHighlighterStyled
      {...props}
    >
      {children}
    </ContentHighlighterStyled>
  );
};

export default ContentHighlighter;
