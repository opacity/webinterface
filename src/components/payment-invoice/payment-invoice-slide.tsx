import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";
import ClipboardWidget from "../shared/clipboard-widget";
import QRCode from "qrcode.react";

const PAY_WITH_METAMASK_IMG = require("../../assets/images/pay_with_metamask.png");

const Cost = styled.span`
  color: #846b99;
  font-weight: 600;
`;

const MetamaskButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
`;

const MetamaskImg = styled.img`
  width: 180px;
`;

const PaymentInvoiceSlide = ({ cost, ethAddress, gasPrice, openMetamask }) => (
  <ScreenContainer title={"Send OPQ"}>
    <ScreenDescription>
      To complete this transaction, send <Cost>{cost} OPQ</Cost> with gas price
      of at least <Cost>{gasPrice} Gwei</Cost> to the address listed below. Your
      upload will start automatically after your payment is received. This may
      take some time depending on network traffic.
    </ScreenDescription>
    <MetamaskButton
      onClick={() => openMetamask({ cost, ethAddress, gasPrice })}
    >
      <MetamaskImg src={PAY_WITH_METAMASK_IMG} />
    </MetamaskButton>
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
);

export default PaymentInvoiceSlide;
