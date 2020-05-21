import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { EXCHANGE_LINK, theme } from "../../config";

import Metamask from "../../services/metamask";

import ContentBox from "./content-box";
import Content from "./content";
import Hr from "./hr";
import Title from "./title";
import MetamaskButton from "../shared/metamask-button";
import OutboundLink from "../shared/outbound-link";
import Spinner from "../shared/spinner";
import Redeem from "./redeem";

const ICON_CLIPBOARD = require("../../assets/images/icon_clipboard.svg");

const ContentBold = styled(Content)`
  margin-top: 25px;
  font-weight: bold;
  min-height: 28px;
`;

const ContentCentered = styled(Content)`
  text-align: center;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  text-align: center;
`;

const SplitLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const OtherOptionsTitle = styled.h2`
  color: ${props => props.theme.title.color};
  font-size: ${props => props.theme.container.title.size}px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: 600;
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  margin: 0 auto 20px auto;
  padding-top: 0;
  text-align: center;
`;

const OtherOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 0 0x 40px 20px;
  text-align: center;
`;

const QRCodeWrapper = styled.div`
  text-align: center;
`;

const Label = styled.h3`
  color: ${props => props.theme.label.color};
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.7px;
  line-height: normal;
  margin: 10px 0;
`;

const LabelQR = styled(Label)`
  margin-top: 0;
`;

const LabelColored = styled(Label)`
  color: ${props => props.theme.title.color};
`;

const Bold = styled.span`
  font-weight: bold;
`;

const EthAddressWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.password.background};
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const fadeout = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const CopiedReminder = styled.span`
  color: ${props => props.theme.label.color};
  font-size: 10px;
  position: absolute;
  right: -100px;
  animation: ${fadeout} 2s ease-in-out 0s forwards;
`;

const EthAddress = styled.span`
  color: white;
  font-size: 12px;
  overflow-x: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ClipboardIconWrrapper = styled.div`
  display: flex;
`;

const ClipboardIcon = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 0 10px;
  object-fit: contain;
`;

const Or = styled.span`
  display: flex;
  flex-direction: row;
  color: #778291;
  margin: 10px auto;
  width: 100%;
  max-width: 180px;

  :before,
  :after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #778291;
    margin: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const CryptoPayment = ({ invoice, openMetamask, cost, storageLimit }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    console.log(storageLimit, cost, invoice)
  }, [invoice, cost, storageLimit])

  let ethAddress;

  if (invoice) {
    ({ ethAddress } = invoice.opqInvoice || invoice);
  }

  return (
    cost && ethAddress
    ? (
      <ThemeProvider theme={theme}>
        <SplitLayout>
          <ContentBox>
            <Title>Send Payment with OPQ</Title>
            <Hr />
            <Content>
              Use the Opacity Storage Token, OPQ, to pay for your storage account.
              Send your total amount of <Bold>{cost.toLocaleString()} OPQ </Bold> to
              the address below or you may use MetaMask to easily make your payment
              right in your browser.
            </Content>
            <ContentBold>
              IMPORTANT: Do not send any other coin or token to this account address
              as it may result in a loss of funds. Only send {cost.toLocaleString()}{" "}
              OPQ. Sending more may also result in loss of funds.
            </ContentBold>
            <Content>
              Once your payment is sent, it may take some time to confirm your
              payment on the Ethereum network. We will confirm receipt and complete
              setup of your account once the network transaction is confirmed.
              Please be patient.
            </Content>
            <Wrapper>
              <Spinner isActive={true} />
            </Wrapper>
            <LabelColored>
              Send {cost.toLocaleString()} OPQ to Ethereum Address:
            </LabelColored>
            {invoice &&
              <EthAddressWrapper>
                <EthAddress>{ethAddress}</EthAddress>
                <CopyToClipboard text={ethAddress} onCopy={() => setIsCopied(true)}>
                  <ClipboardIconWrrapper>
                    <ClipboardIcon src={ICON_CLIPBOARD} />
                  </ClipboardIconWrrapper>
                </CopyToClipboard>
                {isCopied && <CopiedReminder>Copied to clipboard!</CopiedReminder>}
              </EthAddressWrapper>
            }
            <ContentCentered>
              Need OPQ?{" "}
              <OutboundLink href={EXCHANGE_LINK}>Purchase here</OutboundLink>
            </ContentCentered>
          </ContentBox>

          {invoice && <>
            <OtherOptionsWrapper>
              <OtherOptionsTitle>Other Ways To Pay</OtherOptionsTitle>
              {Metamask.isInstalled && <>
                <PaymentWrapper>
                  <MetamaskButton
                    onClick={() => openMetamask({ ethAddress, cost, gasPrice: 20 })}
                  />
                </PaymentWrapper>
                <Or>or</Or>
              </>}
              <PaymentWrapper>
                <Redeem ethAddress={ethAddress} storageLimit={storageLimit} />
              </PaymentWrapper>
              <Or>or</Or>
              <PaymentWrapper>
                <QRCodeWrapper>
                  <LabelQR>Scan QR code to pay</LabelQR>
                  <QRCode
                    value={ethAddress}
                    size={200}
                    renderAs="svg"
                    bgColor="#ffffff"
                    fgColor="#2e3854"
                    level="H"
                    color="#ffffff"
                    includeMargin={true}
                  />
                </QRCodeWrapper>
              </PaymentWrapper>
            </OtherOptionsWrapper>
          </>}
        </SplitLayout>
      </ThemeProvider>
    )
    : <div>Loading...</div>
  );
};

export default CryptoPayment;
