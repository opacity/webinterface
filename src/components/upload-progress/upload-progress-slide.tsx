import React from "react";

import ClipboardBtn from "../shared/clipboard-button";
import ProgressBar from "../shared/progress-bar";
import Slide from "../shared/slide";
import styled from "styled-components";

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

const OpacityBoxContainer = styled.div`
  height: 25px;
  background-color: #232b40;
  margin-bottom: 50px;
`;

const OpacityText = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

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

const UploadProgressSlide = ({ uploadProgress, handle }) => (
  <Slide title="Attaching File to Tangle">
    <Instructions>
    Your file has been uploaded to the broker nodes, and an <InstructionsSpan>Opacity Handle</InstructionsSpan> has been provided below. This handle is the only way to access your file on the Tangle. Please store this handle in a safe place.  </Instructions>
    <InstructionsNext>
      Leaving this page will not interrupt your file attaching to the Tangle. <b>Bookmark this page to be notified when file attachment is complete.</b>
    </InstructionsNext>
    <OpacityHeader>File Attachment Progress</OpacityHeader>
    <ProgressBar progress={uploadProgress} backgroundColor="#846b99"/>
    <OpacityHeader>Opacity handle</OpacityHeader>
      <OpacityBoxContainer>
        <OpacityText>
          {handle}
        </OpacityText>
      </OpacityBoxContainer>
      <ClipboardBtn text={handle}>Copy handle</ClipboardBtn>
  </Slide>
);

export default UploadProgressSlide;
