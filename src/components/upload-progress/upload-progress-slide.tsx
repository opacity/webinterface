import React from "react";

import {
  ClipboardButton,
  ContentHeader,
  ContentHighlighter,
  ContentText,
  ProgressBar,
  ScreenContainer, 
  ScreenDescription,
  ScreenDescriptionHighlighter
} from "../shared";

const UploadProgressSlide = ({ uploadProgress, handle }) => (
  <ScreenContainer title="Attaching File to Tangle">
    <ScreenDescription>
      Your file has been uploaded to the broker nodes, and an{" "}
      <ScreenDescriptionHighlighter>Opacity Handle</ScreenDescriptionHighlighter> has been
      provided below. This handle is the only way to access your file on the
      Tangle. Please store this handle in a safe place.
    </ScreenDescription>
    <ScreenDescription>
      Leaving this page will not interrupt your file attaching to the Tangle.{" "}
      <b>Bookmark this page to be notified when file attachment is complete.</b>
    </ScreenDescription>
    <ContentHeader>File Attachment Progress</ContentHeader>
    <ProgressBar progress={uploadProgress} backgroundColor="#846b99" />
    <ContentHeader>Opacity handle</ContentHeader>
    <ContentHighlighter>
      <ContentText>{handle}</ContentText>
    </ContentHighlighter>
    <ClipboardButton text={handle}>Copy handle</ClipboardButton>
  </ScreenContainer>
);

export default UploadProgressSlide;
