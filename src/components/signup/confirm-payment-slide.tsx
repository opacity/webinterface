import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import ContentBox from "./content-box";
import Content from "./content";
import Title from "./title";

const Link = styled.span`
  color: ${props => props.theme.link.color};
  text-align: center;
`;

const RegisterConfirmPaymentSlide = () => (
  <ThemeProvider theme={theme}>
    <ContentBox>
      <Title>Your Opacity Account is Ready!</Title>
      <Content>
        <Link>Login now with your Account Handle and PIN</Link>
      </Content>
    </ContentBox>
  </ThemeProvider>
);

export default RegisterConfirmPaymentSlide;
