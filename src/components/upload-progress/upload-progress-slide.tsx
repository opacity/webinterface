import React from "react";
import styled from "styled-components";

import ProgressBar from "../shared/progress-bar";
import ClipboardWidget from "../shared/clipboard-widget";
import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

import { DESKTOP_WIDTH } from "../../config";

const Label = styled.h3`
  margin: 0 0 11px 0;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #ffffff;
  text-transform: uppercase;
`;

const Terminology = styled.span`
  color: #846b99;
  font-weight: 600;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const ProgressSection = styled.div`
  margin-bottom: 60px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    margin-bottom: 0px;
  }
`;

const UploadProgressSlide = ({ uploadProgress, handle }) => (
  <ScreenContainer title={"Attaching File"}>
    <ScreenDescription>
      Your file has been uploaded to the broker nodes and an{" "}
      <Terminology>Opacity Handle</Terminology> has been provided below.{" "}
      <Bold>
        This handle is the only way to access your file. Please store this
        handle in a safe place now.
      </Bold>{" "}
      Leaving this page now will not interrupt your file upload. Bookmark this
      page to return later and check your file upload progress.
    </ScreenDescription>

    <ProgressSection>
      <Label>File Attachment Progress</Label>
      <ProgressBar progress={uploadProgress} />
    </ProgressSection>

    <ClipboardWidget title="Opacity Handle" text={handle} property="Handle" />
  </ScreenContainer>
);

export default UploadProgressSlide;
