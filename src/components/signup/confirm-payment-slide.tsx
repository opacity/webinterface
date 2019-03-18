import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import ContentBox from "./content-box";
import Content from "./content";
import Title from "./title";

const Link = styled.span`
  color: ${props => props.theme.link.color};
`;

const RegisterConfirmPaymentSlide = () => (
  <ThemeProvider theme={theme}>
    <ContentBox>
      <Title>Your Opacity Account is Ready!</Title>
      <Content>
        Login using your Storage Handle and Storage PIN using{" "}
        <Link>the Opacity web interface.</Link>
      </Content>
    </ContentBox>
  </ThemeProvider>
);

export default RegisterConfirmPaymentSlide;
