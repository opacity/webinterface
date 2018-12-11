import React from "react";
import styled from "styled-components";

import ClipboardBtn from "../shared/clipboard-button";
import Slide from "../shared/slide";

const ICON_READY = require("../../assets/images/icon_ready.png");

const HandleHeader = styled.p`
  margin-top: 70px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #ffffff;
  text-transform: uppercase;
`;

const OpacityHandleContainer = styled.div`
  height: 25px;
  background-color: #232b40;
  margin-bottom: 50px;
`;

const OpacityHandle = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const CompleteInstructions = styled.p`
  margin-top: 75px;
  width: 460px;
  height: 66px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const CompleteInstructionsSpan = styled.span`
  font-weight: bold;
  color: #af8ecb;
`;

const UploadCompleteSlide = ({ handle }) => (
  <Slide title="Attachment Complete" image={ICON_READY}>
    <CompleteInstructions>
      Your file has been successfully uploaded to the Tangle.
      Your <CompleteInstructionsSpan>Opacity Handle</CompleteInstructionsSpan> is below.
      This handle is the only way to access your file on the Tangle.
      Please store this handle in a safe place.
    </CompleteInstructions>
    <div>
      <HandleHeader>Opacity Handle</HandleHeader>
      <OpacityHandleContainer>
        <OpacityHandle id="opacity-handle">
          {handle}
        </OpacityHandle>
      </OpacityHandleContainer>
      <ClipboardBtn text={handle}>Copy handle</ClipboardBtn>
    </div>
  </Slide>
);

export default UploadCompleteSlide;
