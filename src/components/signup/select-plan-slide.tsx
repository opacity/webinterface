import React from "react";
import { ThemeProvider } from "styled-components";

import { theme, PlanType } from "../../config";

import Subscriptions from "../shared/subscriptions";

type SelectPlanSlideProps = {
  isCustom: boolean
  isUpgrade?: boolean
  filter?: (plan: PlanType) => boolean
  next?: (plan: PlanType) => void
}

const SelectPlanSlide = ({ isCustom, isUpgrade, filter, next }: SelectPlanSlideProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Subscriptions isCustom={isCustom} isUpgrade={isUpgrade} filter={filter} next={next} />
    </ThemeProvider>
  );
};

export default SelectPlanSlide;
