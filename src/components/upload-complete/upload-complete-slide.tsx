import React from "react";

import {
  ClipboardButton,
  ContentHeader,
  ContentHighlighter,
  ContentText,
  Slide,
  Instructions,
  InstructionsHighlighter
} from "../shared";

const UploadCompleteSlide = ({ handle }) => (
  <Slide title="Attachment Complete">
    <Instructions>
      Your file has been successfully uploaded to the Tangle. Your{" "}
      <InstructionsHighlighter>Opacity Handle</InstructionsHighlighter> is
      below. This handle is the only way to access your file on the Tangle.
      Please store this handle in a safe place.
    </Instructions>
    <ContentHeader>Opacity Handle</ContentHeader>
    <ContentHighlighter>
      <ContentText id="opacity-handle">{handle}</ContentText>
    </ContentHighlighter>
    <ClipboardButton text={handle}>Copy handle</ClipboardButton>
  </Slide>
);

export default UploadCompleteSlide;
