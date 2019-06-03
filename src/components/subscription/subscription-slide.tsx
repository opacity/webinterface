import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { HEADER_TYPES, theme } from "../../config";

import ScreenContainer from "../shared/screen-container";
import Subscription from "../shared/subscription";
import Header from "../shared/header";

const Container = styled.div`
  width: 100%;
`;

const SubscriptionSlide = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header type={HEADER_TYPES.EMPTY} />
      <ScreenContainer title={"Choose Subscription Plan"}>
        <Subscription />
      </ScreenContainer>
    </Container>
  </ThemeProvider>
);

export default SubscriptionSlide;
