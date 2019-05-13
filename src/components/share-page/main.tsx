import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Download } from "opaque";

import { HEADER_TYPES, theme } from "../../config";

import Header from "../shared/header";

const Container = styled.div`
  width: 100%;
`;

interface FileMetadata {
  name?: string;
  size?: number;
}

const Main = ({ handle, download }) => {
  const [metadata, setMetadata] = useState<FileMetadata>({});

  useEffect(() => {
    const download = new Download(handle, {
      endpoint: "http://176.9.147.13:8081",
      autoStart: false
    });

    download.metadata.then(({ name, size }) => {
      setMetadata({ name, size } as FileMetadata);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.SCREEN_CONTAINER} />
        <div>{JSON.stringify(metadata)}</div>
        <button onClick={() => download(handle)}>Download file</button>
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
