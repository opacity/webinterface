import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import ContentBox from "./content-box";
import Title from "./title";

const Content = styled.a`
  text-align: center;
  margin-top: 25px;
  width: auto;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.link.color};
`;

const RegisterConfirmPaymentSlide = () => (
  <ThemeProvider theme={theme}>
    <ContentBox>
      <Title>Your Opacity Account is Ready!</Title>
      <Content href="/login">
        Login now with your Account Handle and PIN
      </Content>
    </ContentBox>
  </ThemeProvider>
);

export default RegisterConfirmPaymentSlide;
