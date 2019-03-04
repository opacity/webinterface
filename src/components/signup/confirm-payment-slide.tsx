import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import ContentBox from "./content-box";

const ICON_LOGO = require("../../assets/images/logo.svg");

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
    <ContentBox>
      <Title>Confirm Payment</Title>
      <Hr />
      <StateWrapper>
        <StateIcon src={ICON_LOGO} alt="state" />
        <StateHr />
        <StateTitle>Confirming payment on Ethereum Blockchain…</StateTitle>
      </StateWrapper>
      <StateWrapper>
        <StateIcon src={ICON_LOGO} alt="state" />
        <StateHr />
        <StateTitle>Deploying storage smart contract…</StateTitle>
      </StateWrapper>
      <StateWrapper>
        <StateIcon src={ICON_LOGO} alt="state" />
        <StateHr />
        <StateTitle>Ensuring smart contract integrity…</StateTitle>
      </StateWrapper>
      <HrContent />
      <Title>Your Opacity Account is Ready!</Title>
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
  </ThemeProvider>
);

export default RegisterConfirmPaymentSlide;
