import React from "react";
import styled from "styled-components";

import ScreenContainerError from "../shared/screen-container-error";

const ICON_ERROR = require("../../assets/images/icon_error.png");

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
  color: #0068ea;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #0068ea;
  }
`;

const ErrorPageSlide = ({ handle }) => (
  <ScreenContainerError title="Uh oh! Something went wong." image={null}>
    <ErrorImg src={ICON_ERROR} alt="error-img" />
    <ErrorDescription>
      There was a problem with your upload. Please visit our{" "}
      <ErrorDescriptionLink href="https://t.me/oysterprotocol">
        {" "}
        Telegram Channel{" "}
      </ErrorDescriptionLink>{" "}
      for more information.
    </ErrorDescription>
  </ScreenContainerError>
);

export default ErrorPageSlide;
