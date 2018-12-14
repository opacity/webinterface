import React from "react";
import styled from "styled-components";

import Slide from "../shared/slide";

const Instructions = styled.p`
  margin-top: 75px;
  width: 460px;
  height: 66px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const PaymentConfirmSlide = () => (
  <Slide title="Transaction Received">
    <Instructions>
      Your transaction has been received, and is now being confirmed on the
      Ethereum Blockchain.
    </Instructions>
  </Slide>
);

export default PaymentConfirmSlide;
