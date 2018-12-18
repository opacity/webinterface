import React from "react";
import styled from "styled-components";

const ContentTextStyled = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const ContentText = props => {
  const { children } = props;
  return (
    <ContentTextStyled
      {...props}
    >
      {children}
    </ContentTextStyled>
  );
};

export default ContentText;
