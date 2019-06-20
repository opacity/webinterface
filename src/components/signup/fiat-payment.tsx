import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import ContentBox from "./content-box";
import Content from "./content";
import Hr from "./hr";
import Title from "./title";

const FiatPayment = ({ cost }) => {
  return (
    <ThemeProvider theme={theme}>
      <ContentBox>
        <Title>Pay with your debit or credit card</Title>
        <Hr />
        <Content>Secure payment</Content>
      </ContentBox>
    </ThemeProvider>
  );
};

export default FiatPayment;
