import React from "react";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const ICON_SPINNER = require("../../assets/images/icon_spinner.png");

const DownloadStartedSlide = () => (
  <ScreenContainer title={"Retrieving file..."}>
    <ScreenDescription>
      Your file is being retrieved from the Tangle.
    </ScreenDescription>
    <div>
      <img src={ICON_SPINNER} alt="spinner" />
    </div>
  </ScreenContainer>
);

export default DownloadStartedSlide;
