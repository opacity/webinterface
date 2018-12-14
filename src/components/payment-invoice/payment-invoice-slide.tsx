import React, { Component } from "react";
import styled from "styled-components";

import ClipboardBtn from "../shared/clipboard-button";
import Slide from "../shared/slide";

const OpacityHeader = styled.p`
  margin-top: 70px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #ffffff;
  text-transform: uppercase;
`;

const OpacityBoxContainer = styled.div`
  height: 25px;
  background-color: #232b40;
  margin-bottom: 50px;
`;

const OpacityText = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

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

const InstructionsSpan = styled.span`
  font-weight: bold;
  color: #af8ecb;
`;

interface PaymentInvoiceSlideProps {
  cost;
  ethAddress;
}

class PaymentInvoiceSlide extends Component<PaymentInvoiceSlideProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { cost, ethAddress } = this.props;
    return (
      <Slide title="Send OPQ">
        <Instructions>
          To complete this transaction, send <InstructionsSpan>{cost} OPQ</InstructionsSpan> to the
          address listed below:
        </Instructions>
        <OpacityHeader>Address</OpacityHeader>
        <OpacityBoxContainer>
          <OpacityText>
            {ethAddress}
          </OpacityText>
        </OpacityBoxContainer>
        <ClipboardBtn text={ethAddress}>Copy address</ClipboardBtn>
      </Slide>
    );
  }
}

export default PaymentInvoiceSlide;
