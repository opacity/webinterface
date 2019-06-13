import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import Subscriptions from "../shared/subscriptions";

const SelectPlanSlide = () => {
  return (
    <ThemeProvider theme={theme}>
      <Subscriptions />
    </ThemeProvider>
  );
};

export default SelectPlanSlide;
