import React from "react";
import styled, { ThemeProvider } from "styled-components";
import QRCode from "qrcode.react";

import { MOBILE_WIDTH, theme, REGISTER_SEND_PAYMENT } from "../../config";

import ScreenContainer from "../shared/screen-container";
import RegisterPanel from "../shared/register-panel";

import Metamask from "../../services/metamask";

const PAY_WITH_METAMASK_IMG = require("../../assets/images/pay_with_metamask.png");

const MetamaskButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
`;

const MetamaskImg = styled.img`
  width: 180px;
`;

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
`;

const ContentBox = styled.div`
  margin: auto;
  background-color: ${props => props.theme.container.background};
  padding: 80px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
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

const Label = styled.h3`
  margin-top: 25px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: ${props => props.theme.container.content};
  text-transform: uppercase;
`;

const LabelColored = styled(Label)`
  color: ${props => props.theme.title.color};
`;

const ImportantWrapper = styled.div`
  color: ${props => props.theme.button.color};
  background-color: ${props => props.theme.container.content};
  padding: 10px;
`;

const Important = styled.span`
  color: ${props => props.theme.button.color};
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const RegisterSendPaymentSlide = () => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Register on Opacity"}>
      <RegisterPanel step={REGISTER_SEND_PAYMENT} />
      <ContentBox>
        <Title>Send Payment</Title>
        <Hr />
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac massa
          vestibulum, vestibulum nunc in, imperdiet augue. Phasellus nisl est,
          tristique ac magna sed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut ac massa vestibulum, <Bold>16 OPQ </Bold>
          nunc in, imperdiet augue.
        </Content>
        <LabelColored>Payment Address:</LabelColored>
        <ImportantWrapper>
          <Important>0xe99356bde974bbe08721d77712168fa070aa8da4</Important>
        </ImportantWrapper>
        <Label>Payment Address:</Label>
        <QRCode
          value={"ethAddress"}
          size={200}
          renderAs="svg"
          bgColor="transparent"
          fgColor="#2e3854"
          level="H"
          color="#ffffff"
          includeMargin={true}
        />
        {Metamask.isInstalled && (
          <MetamaskButton onClick={() => {}}>
            <MetamaskImg src={PAY_WITH_METAMASK_IMG} />
          </MetamaskButton>
        )}
        <Content>
          Need OPQ? <Link>Purchase some here.</Link>
        </Content>
      </ContentBox>
    </ScreenContainer>
  </ThemeProvider>
);

export default RegisterSendPaymentSlide;
