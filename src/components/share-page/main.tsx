import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { HEADER_TYPES, theme } from "../../config";

import Header from "../shared/header";

const Container = styled.div`
  width: 100%;
`;

const Main = ({ handle }) => {
  console.log(handle);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.SCREEN_CONTAINER} />
        <div>{handle}</div>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
