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

const ContentBold = styled(Content)`
  margin-top: 25px;
  font-weight: bold;
  min-height: 28px;
`;

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

const SendPaymentSlide = ({ invoice: { ethAddress, cost }, openMetamask }) => (
  <ThemeProvider theme={theme}>
    <ContentBox>
      <Title>Send Payment with OPQ</Title>
      <Hr />
      <Content>
        Use the Opacity Storage Token, OPQ, to pay for your storage account.
        Send your total amount of <Bold>{cost} OPQ </Bold> to the address below
        or you may use Metamask to easily make your payment right in your
        browser.
      </Content>
      <ContentBold>
        IMPORTANT: Do not send any other coin or token to this account address
        as it may result in a loss of funds.
      </ContentBold>
      <Content>
        Once your payment is sent, it may take some time to confirm your payment
        on the Ethereum network. We will confirm receipt and complete setup of
        your account once the network transaction is confirmed. Please be
        patient.
      </Content>
      <LabelColored>Send {cost} OPQ to Payment Address:</LabelColored>
      <ImportantWrapper>
        <Important>{ethAddress}</Important>
      </ImportantWrapper>
      {Metamask.isInstalled && (
        <PaymentWrapper>
          <MetamaskButton
            onClick={() => openMetamask({ ethAddress, cost, gasPrice: 20 })}
          />
        </PaymentWrapper>
      )}
      <div>
        <Label>Scan QR code to pay</Label>
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
        <OutboundLink href={EXCHANGE_LINK}>Purchase here</OutboundLink>
      </Content>
    </ContentBox>
  </ThemeProvider>
);

export default SendPaymentSlide;
