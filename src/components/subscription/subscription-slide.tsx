import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { SUBSCRIPTION_DESKTOP_WIDTH, theme } from "../../config";

import ScreenContainer from "../shared/screen-container";
import Subscription from "../shared/subscription";

const SubscriptionSlide = () => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Choose Subscription Plan"}>
      <Subscription />
    </ScreenContainer>
  </ThemeProvider>
);

export default SubscriptionSlide;
