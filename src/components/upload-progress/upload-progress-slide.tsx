import React from "react";

import ClipboardBtn from "../shared/clipboard-button";
import ProgressBar from "../shared/progress-bar";
import Slide from "../shared/slide";
import Spinner from "../shared/spinner";

const ICON_UPLOAD = require("../../assets/images/icon_upload.png");

const UploadProgressSlide = ({ uploadProgress, handle }: any) => (
  <Slide title="Upload Progress" image={ICON_UPLOAD}>
    <p className="transaction-confirmed-instructions">
      Transaction Confirmed. Your file is now being uploaded to the Tangle...
      <Spinner isActive={true} className="download-spinner" />
    </p>
    <p>
      You can come back and check your progress using
      <br />
      {handle}
    </p>
    <ClipboardBtn text={window.location.href}>Copy URL</ClipboardBtn>
    <div>
      <ProgressBar progress={uploadProgress} />
      <p>{Math.floor(Math.min(100, uploadProgress))}%</p>
    </div>
  </Slide>
);

export default UploadProgressSlide;
