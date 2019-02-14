import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { MOBILE_WIDTH, theme } from "../../config";

import ClipboardWidget from "../shared/clipboard-widget";
import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const Terminology = styled.span`
  color: ${props => props.theme.title.color};
  font-weight: 600;
`;

const Important = styled.span`
  display: block;
  font-weight: 600;
  width: 460px;
  margin: 15px 0;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const UploadCompleteSlide = ({ handle }) => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Attachment Complete"}>
      <ScreenDescription>
        Your file has been successfully uploaded! Your{" "}
        <Terminology>Opacity Handle</Terminology> is below.
        <Important>
          Important: This handle is the only way to access your file. Please
          store this handle in a safe place. Anyone with access to your handle
          has access to your data.
        </Important>
      </ScreenDescription>
      <ClipboardWidget title="Opacity Handle" text={handle} property="Handle" />
    </ScreenContainer>
  </ThemeProvider>
);

export default UploadCompleteSlide;
