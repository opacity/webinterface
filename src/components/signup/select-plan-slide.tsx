import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import Subscriptions from "../shared/subscriptions";

const SelectPlanSlide = ({ isCustom }) => {
  return (
    <ThemeProvider theme={theme}>
      <Subscriptions isCustom={isCustom} />
    </ThemeProvider>
  );
};

export default SelectPlanSlide;
