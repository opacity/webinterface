import React, { useState, useEffect, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Account, MasterHandle } from "opaque";

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
import { Preview, getTypeFromExt } from "./preview";
import { extname } from "path";
import EventEmitter from "events";
import { FileMeta } from "opaque/pkg/dist-types/core/metadata";

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
  width: 500px;
  max-width: 100%;
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
  width: 100%;
  max-width: 500px;
  max-height: 400px;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DownloadButton = styled.button`
  margin: 10px 15px;
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

const PreviewBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PreviewLink = styled.a`
  display: block;
  width: 100%;
`;

const StyledPreview = styled(Preview)`
  display: block;
  width: 100%;
  max-height: 80vh;
  overflow: auto;
`;

interface FileMetadata {
  name?: string;
  size?: number;
}

const SharePageSlide = ({ handle, download: downloadFile }) => {
  const [metadata, setMetadata] = useState<FileMetadata>({});
  const [error, setError] = useState(false);
  const [downloadObject, setDownloadObject] = useState<EventEmitter & { toBuffer: () => Promise<Buffer>; toFile: () => Promise<File>; metadata: () => Promise<FileMeta> }
>();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const url = useMemo(() => file && URL.createObjectURL(file), [file]);
  const previewLoading = useMemo(() => previewOpen && !file, [previewOpen, file]);
  const previewSupported = useMemo(() => metadata && metadata.name && getTypeFromExt(extname(metadata.name)), [metadata]);

  useEffect(() => {
    const mh = new MasterHandle({ account: new Account() }, {
      downloadOpts: {
        endpoint: API.STORAGE_NODE
      }
    })

    const download = mh.downloadFile(handle)

    setDownloadObject(download);

    download
      .metadata()
      .then(metadata => {
        const { name, size } = metadata;

        setMetadata({ name, size } as FileMetadata);
      })
      .catch(error => {
        console.log("METADATA ERROR: ", error);
        setError(true);
      });

    download.on("download-progress", e => {
      setProgress(e.progress);
    });

    return () => {
      url && URL.revokeObjectURL(url);
    };
  }, []);

  const preview = async () => {
    setPreviewOpen(!previewOpen);

    if (downloadObject) {
      const file = await downloadObject.toFile() as File;

      setFile(file);
    }
  };

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
          <Column>
            <PreviewBox>
              { previewOpen
                ? <>
                  <Spinner isActive={previewLoading && !error} />
                  { file && url
                    ? <>
                      <PreviewLink href={url} target="_blank">{metadata.name}</PreviewLink>
                      <StyledPreview
                        url={url}
                        ext={extname(file.name)}
                        type={file.type}
                      />
                    </>
                    : <div>{Math.round(progress * 1000) / 10}%</div>
                  }
                </>
                : iconType(metadata.name)
              }
            </PreviewBox>
          </Column>
          <ColumnInfo>
            <DownloadIcon src={ICON_DOWNLOAD} />
            <Title>You have been invited to view a file!</Title>

            {Object.keys(metadata).length ? (
              <FileInfo>
                <FileName>{metadata.name}</FileName>
                <FileSize>{formatBytes(metadata.size)}</FileSize>
                <ButtonContainer>
                  <DownloadButton onClick={() => downloadFile(handle)}>
                    Download file
                  </DownloadButton>
                  { previewSupported &&
                    <DownloadButton onClick={() => preview()}>
                      { previewOpen
                        ? "Hide Preview"
                        : "Show Preview"
                      }
                    </DownloadButton>
                  }
                </ButtonContainer>
              </FileInfo>
            ) : (
              <Spinner isActive={!error} />
            )}
            {error && (
              <Description>
                It seems the file you are looking for either does not exist or
                has been removed. Please check your File Handle.
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
