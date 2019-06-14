import React from "react";
import styled, { ThemeProvider } from "styled-components";

import "./root.css";
import "react-toastify/dist/ReactToastify.css";

import { theme } from "../config";

const Container = styled.div`
  display: flex;
  min-height: 100%;
  background-color: ${props => props.theme.background};
`;

const Root = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
);

export default Root;
