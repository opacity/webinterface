import React from "react";
import styled, { ThemeProvider } from "styled-components";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

import { theme } from "../../config";

const Link = styled.a`
  color: ${props => props.theme.title.color};
  font-weight: 600;
`;

const BrokersDownSlide = () => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Broker Nodes Offline"}>
      <ScreenDescription>
        Opacity Storage’s broker nodes are currently offline. Uploads are
        unavailable at this time. Please visit our{" "}
        <Link href="https://t.me/OpacityStorage">Telegram Channel</Link> for
        more information. We apologize for the inconvenience.
      </ScreenDescription>
    </ScreenContainer>
  </ThemeProvider>
);

export default BrokersDownSlide;
