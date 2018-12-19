import React from "react";
import styled from "styled-components";

import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const ICON_SPINNER = require("../../assets/images/icon_spinner.png");

const Icon = styled.img`
  animation: spin 2s linear infinite;
`;

const PaymentConfirmSlide = () => (
  <ScreenContainer title={"Transaction Received"}>
    <ScreenDescription>
      Your transaction has been received, and is now being confirmed on the
      Ethereum Blockchain.
    </ScreenDescription>
    <Icon src={ICON_SPINNER} />
  </ScreenContainer>
);

export default PaymentConfirmSlide;
