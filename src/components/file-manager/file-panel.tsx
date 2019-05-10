import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, MOBILE_WIDTH } from "../../config";

const ICON_LOGO = require("../../assets/images/logo-login.svg");

const Panel = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1130;
  top: 0;
  right: -250px;
  background-color: #ffffff;
  overflow-x: hidden;
  transition: 0.5s;
  margin-top: 62px;
  right: 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const FileWrapper = styled.div`
  width: 200px;
  margin: auto;
  margin-top: 150px;
`;

const FileIconWrapper = styled.div`
  text-align: center;
`;

const FileIcon = styled.img`
  height: 60px;
  width: 60px;
  text-align: center;
`;

const FileTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
`;

const FileInfo = styled.p`
  margin-top: 15px;
  font-size: 8px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.1px;
  color: #4f5e78;
`;

const FileData = styled.p`
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
`;

const FileButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  margin: auto;
  border: none;
  cursor: pointer;
`;

const FileBackButton = styled.div`
  display: none;
  margin-top: 10px;
  cursor: pointer;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const FileBackIcon = styled.img`
  height: 17px;
  width: 17px;
  margin-left: 5px;
  float: left;
`;

const FileBackTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
  margin-left: 5px;
  float: left;
`;

const FilePanel = ({ file, download, closeButton }) => (
  <ThemeProvider theme={theme}>
    <Panel>
      <FileBackButton onClick={() => closeButton()}>
        <FileBackIcon src={ICON_LOGO} />
        <FileBackTitle>Back</FileBackTitle>
      </FileBackButton>
      <FileWrapper>
        <FileIconWrapper>
          <FileIcon src={file.icon} />
        </FileIconWrapper>
        <FileTitle>{file.name}</FileTitle>
        <FileInfo>MODIFIED</FileInfo>
        <FileData>{file.modifiedAt}</FileData>
        <FileInfo>SIZE</FileInfo>
        <FileData>{file.size} FILES</FileData>
        <FileButton onClick={() => download(file.handle)}>Download</FileButton>
      </FileWrapper>
    </Panel>
  </ThemeProvider>
);

export default FilePanel;
