import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../config";

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
