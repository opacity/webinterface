import React from "react";
import styled, { ThemeProvider } from "styled-components";

import "./shared/slicknav.css";
import "./root.css";
import "./responsive.css";

import { theme } from "../config";

const Container = styled.div`
  min-height: 100%;
  background-color: ${props => props.theme.background};
`;

const Root = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
);

export default Root;
