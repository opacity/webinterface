import React from "react";
import styled, { ThemeProvider } from "styled-components";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";
import Header from "../shared/header";

import { HEADER_TYPES, theme } from "../../config";

const Container = styled.div`
  width: 100%;
`;

const Link = styled.a`
  color: ${props => props.theme.title.color};
  font-weight: 600;
`;

const BrokersDownSlide = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header type={HEADER_TYPES.EMPTY} />
      <ScreenContainer title={"Broker Nodes Offline"}>
        <ScreenDescription>
          Opacity Storage’s broker nodes are currently offline. Uploads are
          unavailable at this time. Please visit our{" "}
          <Link href="https://t.me/OpacityStorage">Telegram Channel</Link> for
          more information. We apologize for the inconvenience.
        </ScreenDescription>
      </ScreenContainer>
    </Container>
  </ThemeProvider>
);

export default BrokersDownSlide;
