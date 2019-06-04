import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Download } from "opaque";

import { API, HEADER_TYPES, theme } from "../../config";
import { formatBytes } from "../../helpers";

import Header from "../shared/header";

const ICON_DOWNLOAD = require("../../assets/images/icon_download.webp");

const Container = styled.div`
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${props => props.theme.title.color};
  text-align: center;
`;

const DownloadIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const FileName = styled.h3``;

const FileSize = styled.h4`
  font-weight: normal;
`;

const DownloadButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.button.color};
  background: ${props => props.theme.button.background};
`;

interface FileMetadata {
  name?: string;
  size?: number;
}

const Main = ({ handle, download }) => {
  const [metadata, setMetadata] = useState<FileMetadata>({});

  useEffect(() => {
    const download = new Download(handle, {
      endpoint: API.STORAGE_NODE,
      autoStart: false
    });

    download
      .metadata()
      .then(({ name, size }) => {
        setMetadata({ name, size } as FileMetadata);
      })
      .catch(error => {
        console.log("METADATA ERROR: ", error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />
        <Body>
          <DownloadIcon src={ICON_DOWNLOAD} />
          <Title>You have been invited to view a file!</Title>
          {Object.keys(metadata).length ? (
            <FileInfo>
              <FileName>{metadata.name}</FileName>
              <FileSize>{formatBytes(metadata.size)}</FileSize>
              <DownloadButton onClick={() => download(handle)}>
                Download file
              </DownloadButton>
            </FileInfo>
          ) : null}
        </Body>
        <ToastContainer
          pauseOnHover={false}
          draggable={true}
          progressClassName="toast-progress-bar"
          bodyClassName="toast-body"
        />
      </Container>
    </ThemeProvider>
  );
};

export default Main;
