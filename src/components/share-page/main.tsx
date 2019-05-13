import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { HEADER_TYPES, theme } from "../../config";

import Header from "../shared/header";

const Container = styled.div`
  width: 100%;
`;

const Main = ({ handle, download }) => {
  console.log(handle);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.SCREEN_CONTAINER} />
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
