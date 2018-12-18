import React from "react";

import {
  ClipboardButton,
  ContentHeader,
  ContentHighlighter,
  ContentText,
  Slide,
  ProgressBar,
  Instructions,
  InstructionsHighlighter,
  InstructionsNext
} from "../shared";

const UploadProgressSlide = ({ uploadProgress, handle }) => (
  <Slide title="Attaching File to Tangle">
    <Instructions>
      Your file has been uploaded to the broker nodes, and an{" "}
      <InstructionsHighlighter>Opacity Handle</InstructionsHighlighter> has been
      provided below. This handle is the only way to access your file on the
      Tangle. Please store this handle in a safe place.
    </Instructions>
    <InstructionsNext>
      Leaving this page will not interrupt your file attaching to the Tangle.{" "}
      <b>Bookmark this page to be notified when file attachment is complete.</b>
    </InstructionsNext>
    <ContentHeader>File Attachment Progress</ContentHeader>
    <ProgressBar progress={uploadProgress} backgroundColor="#846b99" />
    <ContentHeader>Opacity handle</ContentHeader>
    <ContentHighlighter>
      <ContentText>{handle}</ContentText>
    </ContentHighlighter>
    <ClipboardButton text={handle}>Copy handle</ClipboardButton>
  </Slide>
);

export default UploadProgressSlide;
