import React from "react";

import {
  ClipboardButton,
  ContentHeader,
  ContentHighlighter,
  ContentText,
  ScreenContainer, 
  ScreenDescription,
  ScreenDescriptionHighlighter
} from "../shared";

const UploadCompleteSlide = ({ handle }) => (
  <ScreenContainer title="Attachment Complete">
    <ScreenDescription>
      Your file has been successfully uploaded to the Tangle. Your{" "}
      <ScreenDescriptionHighlighter>Opacity Handle</ScreenDescriptionHighlighter> is
      below. This handle is the only way to access your file on the Tangle.
      Please store this handle in a safe place.
    </ScreenDescription>
    <ContentHeader>Opacity Handle</ContentHeader>
    <ContentHighlighter>
      <ContentText id="opacity-handle">{handle}</ContentText>
    </ContentHighlighter>
    <ClipboardButton text={handle}>Copy handle</ClipboardButton>
  </ScreenContainer>
);

export default UploadCompleteSlide;
