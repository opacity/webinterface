import React from "react";
import styled, { ThemeProvider } from "styled-components";

import SlideError from "../shared/slide-error";

import { theme } from "../../config";

const ICON_ERROR = require("../../assets/images/icon_error.webp");

const ErrorImg = styled.img`
  display: block;
  float: right;
  margin: 0;
`;

const ErrorDescription = styled.p`
  font-size: 20px;
  margin: 80px 0 0;
  max-width: 450px;
`;

const ErrorDescriptionLink = styled.a`
  color: ${props => props.theme.title.color};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.title.color};
  }
`;

const ErrorPageSlide = ({ handle }) => (
  <ThemeProvider theme={theme}>
    <SlideError title="Uh oh! Something went wong." image={null}>
      <ErrorImg src={ICON_ERROR} alt="error-img" />
      <ErrorDescription>
        There was a problem with your upload. Please visit our{" "}
        <ErrorDescriptionLink href="https://t.me/OpacityStorage">
          {" "}
          Telegram Channel{" "}
        </ErrorDescriptionLink>{" "}
        for more information.
      </ErrorDescription>
    </SlideError>
  </ThemeProvider>
);

export default ErrorPageSlide;
