import React from "react";
import styled from "styled-components";

const ContentHeaderStyled = styled.p`
  margin-top: 70px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #ffffff;
  text-transform: uppercase;
`;

const ContentHeader = props => {
  const { children } = props;
  return (
    <ContentHeaderStyled
      {...props}
    >
      {children}
    </ContentHeaderStyled>
  );
};

export default ContentHeader;
