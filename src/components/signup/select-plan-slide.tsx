import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import ContentBox from "./content-box";
import Title from "./title";

const SelectPlanSlide = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContentBox>
        <Title>Select a Plan</Title>
      </ContentBox>
    </ThemeProvider>
  );
};

export default SelectPlanSlide;
