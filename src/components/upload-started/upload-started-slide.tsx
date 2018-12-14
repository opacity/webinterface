import React from "react";
import styled from "styled-components";

import ProgressBar from "../shared/progress-bar";
import Slide from "../shared/slide";

const Instructions = styled.p`
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

const InstructionsNext = styled(Instructions)`
  margin-top: 45px;
`;

const InstructionsSpan = styled.span`
  font-weight: bold;
  color: #af8ecb;
`;

const OpacityHeader = styled.p`
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

const UploadStartedSlide = ({ chunksProgress }) => {
  return (
    <Slide title="File Uploading to Brokers">
      <Instructions>
        Transaction Confirmed. Your file is now being uploaded to the broker nodes,
        and you will receive your <InstructionsSpan>Oyster Handle</InstructionsSpan> once the upload is complete. 
      </Instructions>
      <OpacityHeader>Broker Node 1</OpacityHeader>
      <ProgressBar progress={chunksProgress} backgroundColor="#846b99"/>
      <OpacityHeader>Broker Node 2</OpacityHeader>
      <ProgressBar progress={chunksProgress} backgroundColor="#605c8e"/>
      <InstructionsNext>
        {Math.floor(Math.min(100, chunksProgress))}% - File is being broken into chunks and each chunk encrypted…
      </InstructionsNext>
    </Slide>
  );
};

export default UploadStartedSlide;
