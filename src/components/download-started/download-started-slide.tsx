import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";

const ICON_SPINNER = require("../../assets/images/icon_spinner.png");

const RetrievalInstructions = styled.p`
  padding-bottom: 50px;
`;

const SpinnerWrapper = styled.div`
  padding-left: 100px;
`;

const DownloadStartedSlide = () => (
  <ScreenContainer title="Retrieving file...">
    <RetrievalInstructions>
      Your file is being retrieved from the Tangle.
    </RetrievalInstructions>
    <SpinnerWrapper>
      <img src={ICON_SPINNER} alt="spinner" />
    </SpinnerWrapper>
  </ScreenContainer>
);

export default DownloadStartedSlide;
