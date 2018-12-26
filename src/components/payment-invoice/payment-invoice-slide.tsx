import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";
import ClipboardWidget from "../shared/clipboard-widget";

const Cost = styled.span`
  color: #846b99;
  font-weight: 600;
`;

const PaymentInvoiceSlide = ({ cost, ethAddress, gasPrice }) => (
  <ScreenContainer title={"Send OPQ"}>
    <ScreenDescription>
      To complete this transaction, send <Cost>{cost} OPQ</Cost> with gas price
      of at least <Cost>{gasPrice} Gwei</Cost> to the address listed below. Your
      upload will start automatically after your payment is received.
    </ScreenDescription>
    <ClipboardWidget title="Address" text={ethAddress} />
  </ScreenContainer>
);

export default PaymentInvoiceSlide;
