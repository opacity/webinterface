import React, { Component } from "react";

import {
  ClipboardButton,
  ContentHeader,
  ContentHighlighter,
  ContentText,
  ScreenContainer, 
  ScreenDescription,
  ScreenDescriptionHighlighter
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
      <ScreenContainer title="Send OPQ">
        <ScreenDescription>
          To complete this transaction, send{" "}
          <ScreenDescriptionHighlighter>{cost} OPQ</ScreenDescriptionHighlighter> to the
          address listed below:
        </ScreenDescription>
        <ContentHeader>Address</ContentHeader>
        <ContentHighlighter>
          <ContentText>{ethAddress}</ContentText>
        </ContentHighlighter>
        <ClipboardButton text={ethAddress}>Copy address</ClipboardButton>
      </ScreenContainer>
    );
  }
}

export default PaymentInvoiceSlide;
