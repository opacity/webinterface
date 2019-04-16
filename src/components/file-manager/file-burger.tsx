import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { theme } from "../../config";

const ICON_LOGO = require("../../assets/images/logo-login.svg");

const Container = styled(Menu)`
  background-color: white;
`;

const FileWrapper = styled.div`
  width: 200px;
  margin: auto;
  margin-top: 150px;
  outline: none;
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

interface FileDescription {
  name?: string;
  modifiedAt?: string;
  size?: number;
  type?: string;
  downloadUrl?: string;
}

interface FileBurgerProps {
  isOpen: boolean;
  file: FileDescription;
}

const FileBurger = ({ isOpen, file }: FileBurgerProps) => {
  const { name, modifiedAt, size, type, downloadUrl } = file;

  return (
    <ThemeProvider theme={theme}>
      <Container
        pageWrapId={"page-wrap"}
        customBurgerIcon={false}
        customCrossIcon={false}
        isOpen={isOpen}
        right
        noOverlay
        disableOverlayClick
      >
        <FileWrapper>
          <FileIconWrapper>
            <FileIcon src={ICON_LOGO} />
          </FileIconWrapper>
          <FileTitle>{name}</FileTitle>
          <FileInfo>MODIFIED</FileInfo>
          <FileData>{modifiedAt}</FileData>
          <FileInfo>SIZE</FileInfo>
          <FileData>
            {size} {type === "folder" ? "files" : "MB"}
          </FileData>
          <FileButton onClick={() => window.open(downloadUrl)}>
            Download
          </FileButton>
        </FileWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default FileBurger;
