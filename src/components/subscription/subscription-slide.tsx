import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { SUBSCRIPTION_DESKTOP_WIDTH, theme } from "../../config";

import ScreenContainer from "../shared/screen-container";
import Subscription from "../shared/subscription";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 20px 0;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    display: block;
  }
`;

const SubscriptionSlide = () => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Choose Subscription Plan"}>
      <Container>
        <Subscription />
      </Container>
    </ScreenContainer>
  </ThemeProvider>
);

export default SubscriptionSlide;
