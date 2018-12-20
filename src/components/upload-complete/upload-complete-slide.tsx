import React from "react";
import styled from "styled-components";

import ClipboardWidget from "../shared/clipboard-widget";
import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const Terminology = styled.span`
  color: #846b99;
  font-weight: 600;
`;

const UploadCompleteSlide = ({ handle }) => (
  <ScreenContainer title={"Attachment Complete"}>
    <ScreenDescription>
      Your file has been successfully uploaded to the Tangle. Your{" "}
      <Terminology>Opacity Handle</Terminology> is below. This handle is the
      only way to access your file on the Tangle. Please store this handle in a
      safe place.
    </ScreenDescription>
    <ClipboardWidget title="Opacity Handle" text={handle} />
  </ScreenContainer>
);

export default UploadCompleteSlide;
