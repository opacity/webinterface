import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";
import ClipboardWidget from "../shared/clipboard-widget";
import QRCode from "qrcode.react";

const Cost = styled.span`
  color: #846b99;
  font-weight: 600;
`;

const PaymentInvoiceSlide = ({ cost, ethAddress, gasPrice }) => (
  <ScreenContainer title={"Send OPQ"}>
    <ScreenDescription>
      To complete this transaction, send <Cost>{cost} OPQ</Cost> with gas price
      of at least <Cost>{gasPrice} Gwei</Cost> to the address listed below. Your
      upload will start automatically after your payment is received. This may
      take some time depending on network traffic.
    </ScreenDescription>
       <ScreenDescription>
        <QRCode
          value={ethAddress}
          size="200"
          renderAs="svg"
          bgColor="#ffffff"
          fgColor="#2e3854"
          level="H"
          color="#ffffff"
          includeMargin="true"
        />
      </ScreenDescription>
    <ClipboardWidget title="Address" text={ethAddress} property="Address" />
  </ScreenContainer>
);

export default PaymentInvoiceSlide;
