import React from "react";
import styled from "styled-components";

import ProgressBar from "../shared/progress-bar";
import ClipboardWidget from "../shared/clipboard-widget";
import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

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
`;

const UploadProgressSlide = ({ uploadProgress, handle }) => (
  <ScreenContainer title={"Attaching File to Tangle"}>
    <ScreenDescription>
      Your file has been uploaded to the broker nodes, and an{" "}
      <Terminology>Opacity Handle</Terminology> has been provided below. This
      handle is the only way to access your file on the Tangle. Please store
      this handle in a safe place. Leaving this page will not interrupt your
      file attaching to the Tangle.{" "}
      <Bold>
        Bookmark this page to be notified when file attachment is complete.
      </Bold>
    </ScreenDescription>

    <ProgressSection>
      <Label>File Attachment Progress</Label>
      <ProgressBar progress={uploadProgress} />
    </ProgressSection>

    <ClipboardWidget title="Opacity Handle" text={handle} property="Handle" />
  </ScreenContainer>
);

export default UploadProgressSlide;
