import React from "react";

import {
  ContentHeader,
  ProgressBar,
  ScreenContainer, 
  ScreenDescription,
  ScreenDescriptionHighlighter
} from "../shared";

const UploadStartedSlide = ({ chunksProgress }) => {
  return (
    <ScreenContainer title="File Uploading to Brokers">
      <ScreenDescription>
        Transaction Confirmed. Your file is now being uploaded to the broker nodes,
        and you will receive your <ScreenDescriptionHighlighter>Oyster Handle</ScreenDescriptionHighlighter> once the upload is complete. 
      </ScreenDescription>
      <ContentHeader>Broker Node 1</ContentHeader>
      <ProgressBar progress={chunksProgress} backgroundColor="#846b99"/>
      <ContentHeader>Broker Node 2</ContentHeader>
      <ProgressBar progress={chunksProgress} backgroundColor="#605c8e"/>
      <ScreenDescription>
        {Math.floor(Math.min(100, chunksProgress))}% - File is being broken into chunks and each chunk encrypted…
      </ScreenDescription>
    </ScreenContainer>
  );
};

export default UploadStartedSlide;
