import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";
import ClipboardWidget from "../shared/clipboard-widget";
import MetamaskButton from "../shared/metamask-button";
import QRCode from "qrcode.react";

import Metamask from "../../services/metamask";

const Cost = styled.span`
  color: ${props => props.theme.title.color};
  font-weight: 600;
`;

const PaymentInvoiceSlide = ({ cost, ethAddress, gasPrice, openMetamask }) => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Send OPQ"}>
      <ScreenDescription>
        To complete this transaction, send <Cost>{cost} OPQ</Cost> with gas
        price of at least <Cost>{gasPrice} Gwei</Cost> to the address listed
        below. Your upload will start automatically after your payment is
        received. This may take some time depending on network traffic.
      </ScreenDescription>
      {Metamask.isInstalled && (
        <MetamaskButton
          onClick={() => openMetamask({ cost, ethAddress, gasPrice })}
        />
      )}
      <ScreenDescription>
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
      </ScreenDescription>
      <ClipboardWidget title="Address" text={ethAddress} property="Address" />
    </ScreenContainer>
  </ThemeProvider>
);

export default PaymentInvoiceSlide;
