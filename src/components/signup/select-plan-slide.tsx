import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import Subscriptions from "../shared/subscriptions";

type SelectPlanSlideProps = {
  isCustom: boolean
  filter?: (plan) => boolean
}

const SelectPlanSlide = ({ isCustom, filter }: SelectPlanSlideProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Subscriptions isCustom={isCustom} filter={filter} />
    </ThemeProvider>
  );
};

export default SelectPlanSlide;
