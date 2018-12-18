import React from "react";

import {
  ContentHeader,
  Slide,
  ProgressBar,
  Instructions,
  InstructionsHighlighter,
  InstructionsNext
} from "../shared";

const UploadStartedSlide = ({ chunksProgress }) => {
  return (
    <Slide title="File Uploading to Brokers">
      <Instructions>
        Transaction Confirmed. Your file is now being uploaded to the broker nodes,
        and you will receive your <InstructionsHighlighter>Oyster Handle</InstructionsHighlighter> once the upload is complete. 
      </Instructions>
      <ContentHeader>Broker Node 1</ContentHeader>
      <ProgressBar progress={chunksProgress} backgroundColor="#846b99"/>
      <ContentHeader>Broker Node 2</ContentHeader>
      <ProgressBar progress={chunksProgress} backgroundColor="#605c8e"/>
      <InstructionsNext>
        {Math.floor(Math.min(100, chunksProgress))}% - File is being broken into chunks and each chunk encrypted…
      </InstructionsNext>
    </Slide>
  );
};

export default UploadStartedSlide;
