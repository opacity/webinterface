import React from "react";

import { ScreenContainer, ScreenDescription } from "../shared";

const PaymentConfirmSlide = () => (
  <ScreenContainer title={"Transaction Received"}>
    <ScreenDescription>
      Your transaction has been received, and is now being confirmed on the
      Ethereum Blockchain.
    </ScreenDescription>
  </ScreenContainer>
);

export default PaymentConfirmSlide;
