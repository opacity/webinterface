import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { SUBSCRIPTION_DESKTOP_WIDTH, MOBILE_WIDTH, theme } from "../../config";

import ScreenContainer from "../shared/screen-container";

const Title = styled.h1`
  font-size: ${props => props.theme.container.title.size}px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.title.color};
  margin: auto;
  text-align: center;
  margin-top: 35px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    text-align: left;
    margin: 20px 20px 0 20px;
    width: 250px;
    flex: 0.5;
  }
`;

const Hr = styled.div`
  width: ${props => props.theme.container.title.underline.witdh}px;
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin: 5px 20px 0 20px;
  }
`;

const Content = styled.p`
  width: 171px;
  min-height: 70px;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  margin: 15px 15px 0 35px;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    width: auto;
    margin: 0 30px 0 30px;
  }
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin: 15px 30px 0 20px;
    width: 250px;
  }
`;

const Button = styled.button`
  width: 171px;
  height: 40px;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  margin: auto;
  border: none;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 20px 0 40px 0;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    position: relative;
    top: -92px;
    right: -150px;
  }
`;

const RegisterConfirmPaymentSlide = () => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Register on Opacity"}>
      <Title>Confirm Payment</Title>
      <Hr />
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac massa
        vestibulum, vestibulum nunc in, imperdiet augue. Phasellus nisl est,
        tristique ac magna sed. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut ac massa vestibulum, vestibulum nunc in, imperdiet
        augue. Phasellus nisl est, tristique ac magna sed
      </Content>
      <ButtonWrapper>
        <Button>Continue</Button>
      </ButtonWrapper>
    </ScreenContainer>
  </ThemeProvider>
);

export default RegisterConfirmPaymentSlide;
