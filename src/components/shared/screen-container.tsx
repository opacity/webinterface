import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { HEADER_SCREEEN_CONTAINER, DESKTOP_WIDTH, theme } from "../../config";

import Header from "./header";

const Container = styled.div``;

const Screen = styled.div`
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

const Underline = styled.hr`
  border: 0;
  border-top: ${props => props.theme.title.underline.height}px solid
    ${props => props.theme.title.underline.color};
  display: block;
  height: ${props => props.theme.title.underline.height}px;
  margin: 6px 0 60px 0;
  padding: 0;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    margin-bottom: 20px;
  }
`;

const ScreenContainer = ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header type={HEADER_SCREEEN_CONTAINER} />
      <Screen>
        <Title>{title}</Title>
        <Underline />
        {children}
      </Screen>
    </Container>
  </ThemeProvider>
);

export default ScreenContainer;
