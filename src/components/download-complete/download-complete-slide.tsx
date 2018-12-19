import React from "react";
import ScreenContainer from "../shared/screen-container";
import Button from "../shared/button";

const DownloadCompleteSlide = () => (
  <ScreenContainer title="Your download is ready">
    <div>
      <p>Click the button below to begin downloading your file.</p>
      <Button className="btn btn-default">DOWNLOAD</Button>
    </div>
  </ScreenContainer>
);

export default DownloadCompleteSlide;
