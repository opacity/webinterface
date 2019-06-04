import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

const ICON_UPLOAD = require("../../assets/images/icon_upload.png");

const Container = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 80px;
  outline: 2px dashed black;
  outline-offset: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Notification = styled.p`
  padding: 10px;
`;

const UploadIcon = styled.img`
  width: 100px;
`;

const DragAndDropOverlay = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Notification>Drag your files to upload to Opacity.</Notification>
      <UploadIcon src={ICON_UPLOAD} />
    </Container>
  </ThemeProvider>
);

export default DragAndDropOverlay;
