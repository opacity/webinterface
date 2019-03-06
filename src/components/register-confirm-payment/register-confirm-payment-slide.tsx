import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, MOBILE_WIDTH, REGISTER_CONFIRM_PAYMENT } from "../../config";

import ScreenContainer from "../shared/screen-container";
import RegisterPanel from "../shared/register-panel";

const CHECKMARK = require("../../assets/images/checkmark.svg");
const IN_PROGRESS = require("../../assets/images/in-progress.svg");

const Title = styled.h1`
  color: ${props => props.theme.title.color};
  font-size: ${props => props.theme.container.title.size}px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: 600;
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  margin-top: 35px;
  margin: auto;
  padding-top: 30px;
  text-align: center;
`;

const ContentBox = styled.div`
  margin: auto;
  background-color: ${props => props.theme.container.background};
  margin: auto;
  max-width: 452px;
  padding: 20px 120px;
  width: 100%;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 20px;
    width: auto;
    padding: 20px;
  }
`;

const Hr = styled.div`
  width: ${props => props.theme.container.title.underline.width}px;
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const HrContent = styled(Hr)`
  width: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Content = styled.p`
  margin-top: 25px;
  width: auto;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
`;

const Link = styled.span`
  color: ${props => props.theme.link.color};
`;

const StateIcon = styled.img`
  width: 28px;
  height: 28px;
  padding: 5px;
  margin-right: 5px;
`;

const StateTitle = styled.span`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  padding: 5px;
  margin-left: 5px;
`;

const StateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 30px 0 50px;
`;

const StateHr = styled.span`
  width: 20px;
  height: 2px;
  background-color: ${props => props.theme.container.title.underline.color}};
  position: relative;
  top: 14px;
`;

const RegisterConfirmPaymentSlide = () => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Register on Opacity"}>
      <RegisterPanel step={REGISTER_CONFIRM_PAYMENT} />
      <ContentBox>
        <Title>Confirm Payment</Title>
        <Hr />
        <StateWrapper>
          <StateIcon src={CHECKMARK} alt="state" />
          <StateHr />
          <StateTitle>Confirming payment on Ethereum Blockchain…</StateTitle>
        </StateWrapper>
        <StateWrapper>
          <StateIcon src={IN_PROGRESS} alt="state" />
          <StateHr />
          <StateTitle>Deploying storage smart contract…</StateTitle>
        </StateWrapper>
        <StateWrapper>
          <StateIcon src={IN_PROGRESS} alt="state" />
          <StateHr />
          <StateTitle>Ensuring smart contract integrity…</StateTitle>
        </StateWrapper>
        <HrContent />
        <Title>Your Opacity Account is Ready!</Title>
        <Hr />
        <Content>
          Login using your Storage Handle and Storage PIN using{" "}
          <Link>the Opacity web interface.</Link>
        </Content>
        <Content>
          Or <Link>download the Opacity Desktop client.</Link>
        </Content>
        <Content>
          On mobile? Download the <Link>Opacity app for iOS</Link> or the{" "}
          <Link>Opacity app for Android.</Link>
        </Content>
      </ContentBox>
    </ScreenContainer>
  </ThemeProvider>
);

export default RegisterConfirmPaymentSlide;
