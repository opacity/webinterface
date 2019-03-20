import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const ICON_SPINNER = `/${require("../../assets/images/icon_spinner.png")}`;

const Icon = styled.img`
  animation: spin 2s linear infinite;
`;

const DownloadStartedSlide = () => (
  <ScreenContainer title={"Retrieving file..."}>
    <ScreenDescription>
      Your file is being retrieved from the Tangle.
    </ScreenDescription>
    <div>
      <Icon src={ICON_SPINNER} />
    </div>
  </ScreenContainer>
);

export default DownloadStartedSlide;
