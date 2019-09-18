import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Download } from "opaque";

import {
  API,
  HEADER_TYPES,
  DATA_TYPES_ICONS,
  DESKTOP_WIDTH,
  theme
} from "../../config";
import { formatBytes } from "../../helpers";

import Header from "../shared/header";
import Spinner from "../shared/spinner";

const ICON_DOWNLOAD = require("../../assets/images/icon_download.png");

const Container = styled.div`
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  padding-right: 40px;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    padding-right: 0px;
    padding-bottom: 40px;
  }
`;

const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DownloadIcon = styled.img`
  width: 100px;
  height: 100px;
`;
const PreviewImage = styled.img`
  width: 500px;
  height: 400px;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 200px;
    height: 200px;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.title.color};
  text-align: center;
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

const Description = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-top: 40px;
  width: 400px;
`;

interface FileMetadata {
  name?: string;
  size?: number;
}

const SharePageSlide = ({ handle, download }) => {
  const [metadata, setMetadata] = useState<FileMetadata>({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const download = new Download(handle, {
      endpoint: API.STORAGE_NODE,
      autoStart: false
    });

    download
      .metadata()
      .then(metadata => {
        const { name, size } = metadata;
        // console.log(metadata);
        // TODO metadata preview
        setMetadata({ name, size } as FileMetadata);
      })
      .catch(error => {
        console.log("METADATA ERROR: ", error);
        setError(true);
      });
  }, []);

  const iconType = name => {
    if (name) {
      const typeIcon = DATA_TYPES_ICONS.find(type => name.includes(type.name));
      return typeIcon ? (
        <PreviewImage src={typeIcon.icon} />
      ) : (
        <PreviewImage src={DATA_TYPES_ICONS[0].icon} />
      );
    }
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />
        <Body>
          <Column>{iconType(metadata.name)}</Column>
          <ColumnInfo>
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
            ) : (
              <Spinner isActive={!error} />
            )}
            {error && (
              <Description>
                It seems the file you are looking for either does not exist or
                has been removed. Please check your FIle Handle.
              </Description>
            )}
          </ColumnInfo>
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

export default SharePageSlide;
