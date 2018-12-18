import React, { Component } from "react";

import {
  ClipboardButton,
  ContentHeader,
  ContentHighlighter,
  ContentText,
  Slide,
  Instructions,
  InstructionsHighlighter
} from "../shared";

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
          To complete this transaction, send{" "}
          <InstructionsHighlighter>{cost} OPQ</InstructionsHighlighter> to the
          address listed below:
        </Instructions>
        <ContentHeader>Address</ContentHeader>
        <ContentHighlighter>
          <ContentText>{ethAddress}</ContentText>
        </ContentHighlighter>
        <ClipboardButton text={ethAddress}>Copy address</ClipboardButton>
      </Slide>
    );
  }
}

export default PaymentInvoiceSlide;
