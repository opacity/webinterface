import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";

import { theme } from "../../config";

const ICON_LOGO = require("../../assets/images/logo.svg");

const Container = styled.div``;

const Logo = styled.div``;

const Footer = ({ history }) => (
  <ThemeProvider theme={theme}>
    <Container />
  </ThemeProvider>
);

export default withRouter(Footer);
