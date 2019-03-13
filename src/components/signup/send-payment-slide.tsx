import React from "react";
import styled, { ThemeProvider } from "styled-components";
import QRCode from "qrcode.react";

import { EXCHANGE_LINK, theme } from "../../config";

import Metamask from "../../services/metamask";

import ContentBox from "./content-box";
import Content from "./content";
import Hr from "./hr";
import Title from "./title";
import MetamaskButton from "../shared/metamask-button";
import OutboundLink from "../shared/outbound-link";

const PaymentWrapper = styled.div`
  margin-top: 20px;
`;

const Label = styled.h3`
  color: ${props => props.theme.label.color};
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.7px;
  line-height: normal;
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

const SendPaymentSlide = ({ invoice: { ethAddress, cost } }) => (
  <ThemeProvider theme={theme}>
    <ContentBox>
      <Title>Send Payment</Title>
      <Hr />
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac massa
        vestibulum, vestibulum nunc in, imperdiet augue. Phasellus nisl est,
        tristique ac magna sed. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut ac massa vestibulum, <Bold>{cost} OPQ </Bold>
        nunc in, imperdiet augue.
      </Content>
      <LabelColored>Payment Address:</LabelColored>
      <ImportantWrapper>
        <Important>{ethAddress}</Important>
      </ImportantWrapper>
      {Metamask.isInstalled && (
        <PaymentWrapper>
          <MetamaskButton onClick={() => {}} />
        </PaymentWrapper>
      )}
      <div>
        <Label>Scan QR code to pay:</Label>
        <QRCode
          value={ethAddress}
          size={200}
          renderAs="svg"
          bgColor="transparent"
          fgColor="#2e3854"
          level="H"
          color="#ffffff"
          includeMargin={true}
        />
      </div>
      <Content>
        Need OPQ?{" "}
        <OutboundLink href={EXCHANGE_LINK}>Purchase some here</OutboundLink>
      </Content>
    </ContentBox>
  </ThemeProvider>
);

export default SendPaymentSlide;
