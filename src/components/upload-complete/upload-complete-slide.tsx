import React from "react";

import ClipboardBtn from "../shared/clipboard-button";
import Slide from "../shared/slide";

const ICON_READY = require("../../assets/images/icon_ready.png");

const UploadCompleteSlide = ({ handle }) => (
  <Slide title="Attachment Complete" image={ICON_READY}>
    <p className="complete-instructions">
      Your file has been successfully uploaded to the Tangle.
      Your <span>Opacity Handle</span> is below.
      This handle is the only way to access your file on the Tangle.
      Please store this handle in a safe place.
    </p>
    <div>
      <p className="handle-header">Opacity Handle</p>
      <div className="oyster-handle-container">
        <p id="oyster-handle" className="oyster-handle">
          {handle}
        </p>
      </div>
      <ClipboardBtn text={handle}>Copy handle</ClipboardBtn>
    </div>
  </Slide>
);

export default UploadCompleteSlide;
