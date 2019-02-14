import React from "react";
import styled, { ThemeProvider } from "styled-components";

import ProgressBar from "../shared/progress-bar";
import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

import { MOBILE_WIDTH, theme } from "../../config";

const ProgressText = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  width: 452px;
  color: ${props => props.theme.container.content};
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const Important = styled.p`
  font-weight: 600;
  width: 460px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const UploadStartedSlide = ({ chunksProgress }) => {
  // TODO: Listen to meta attached state?
  const waitingForMeta = chunksProgress >= 99.999; // epsilon b/c float comparison.

  const roundedProgress = Math.round(chunksProgress * 10) / 10;

  return (
    <ThemeProvider theme={theme}>
      <ScreenContainer title={"File Uploading to Brokers"}>
        <ScreenDescription>
          Transaction Confirmed. Your file is now being uploaded to the broker
          nodes and you will receive your Opacity Handle once the upload is
          complete. Your Opacity Handle is your key to retrieve your file.
        </ScreenDescription>
        <Important>
          Note: Please DO NOT LEAVE this page until you receive your handle.
          This may take some time based on the file size and your internet
          speed.
        </Important>
        <ProgressBar progress={chunksProgress} />
        <ProgressText>
          {waitingForMeta
            ? "Confirming upload on the tangle..."
            : `${roundedProgress}% - File is being broken into encrypted chunks`}
        </ProgressText>
      </ScreenContainer>
    </ThemeProvider>
  );
};

export default UploadStartedSlide;
