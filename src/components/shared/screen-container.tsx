import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { DESKTOP_WIDTH, theme } from "../../config";

const Container = styled.div`
  padding: 70px 250px;
  height: 100%;
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};

  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    padding: 25px 15px;
  }
`;

const Title = styled.h3`
  color: ${props => props.theme.title.color};
  font-size: ${props => props.theme.title.size}px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: normal;
  line-height: normal;
  margin: 0;
`;

const Underline = styled.div`
  width ${props => props.theme.container.title.underline.width}px;
  background-color: ${props => props.theme.container.title.underline.color};
  display: block;
  margin-top: 10px;
  height: ${props => props.theme.container.title.underline.height}px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    margin-bottom: 20px;
  }
`;

const ScreenContainer = ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Title>{title}</Title>
      <Underline />
      {children}
    </Container>
  </ThemeProvider>
);

export default ScreenContainer;
