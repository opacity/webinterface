import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DESKTOP_WIDTH, theme } from "../../config";

const ScreenDescriptionParagraf = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.container.content};
  padding: 0;
  margin-bottom: 60px;
  width: 460px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    width: auto;
    margin-bottom: 20px;
  }
`;

const ScreenDescription = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ScreenDescriptionParagraf>{...children}</ScreenDescriptionParagraf>
  </ThemeProvider>
);

export default ScreenDescription;
