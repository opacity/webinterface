import React from "react";

import { Slide, Instructions } from "../shared";

const PaymentConfirmSlide = () => (
  <Slide title="Transaction Received">
    <Instructions>
      Your transaction has been received, and is now being confirmed on the
      Ethereum Blockchain.
    </Instructions>
  </Slide>
);

export default PaymentConfirmSlide;
