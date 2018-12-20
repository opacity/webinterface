import React from "react";
import styled from "styled-components";

import ProgressBar from "../shared/progress-bar";
import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const ProgressText = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  width: 452px;
  color: #ffffff;
`;

const UploadStartedSlide = ({ chunksProgress }) => {
  return (
    <ScreenContainer title={"File Uploading to Brokers"}>
      <ScreenDescription>
        Transaction Confirmed. Your file is now being uploaded to the broker
        nodes, and you will receive your Opacity Handle once the upload is
        complete.
      </ScreenDescription>
      <ProgressBar progress={chunksProgress} />
      <ProgressText>
        {waitingForMeta
          ? "Confirming upload on the tangle..."
          : `${chunksProgress}% - File is being broken into chunks and each chunk`}
        encrypted…
      </ProgressText>
    </ScreenContainer>
  );
};

export default UploadStartedSlide;
