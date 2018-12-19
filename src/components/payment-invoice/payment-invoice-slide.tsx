import React, { Component } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Button from "../shared/button";
import ScreenContainer from "../shared/screen-container";
import ScreenDescription from "../shared/screen-description";

const ICON_COPY = require("../../assets/images/icon_copy.svg");

const Cost = styled.span`
  color: #846b99;
  font-weight: 600;
`;

const Icon = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`;

const Label = styled.h3`
  margin: 0 0 11px 0;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: #ffffff;
  text-transform: uppercase;
`;

const EthAddress = styled.p`
  align-items: center;
  background-color: #232b40;
  color: #ffffff;
  display: flex;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  height: 25px;
  justify-content: center;
  letter-spacing: normal;
  line-height: normal;
  width: 380px;
`;

const CopyButton = styled(Button)`
  border: none;
  cursor: pointer;
  align-items: center;
  background-color: #846b99;
  color: #ffffff;
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  justify-content: center;
  line-height: normal;
  margin: 60px 0 0 0px;
  text-transform: uppercase;
  width: 289px;
  height: 40px;
`;

interface PaymentInvoiceSlideProps {
  cost;
  ethAddress;
  gasPrice;
}

class PaymentInvoiceSlide extends Component<PaymentInvoiceSlideProps> {
  state = { isCopied: false };

  render() {
    const { cost, ethAddress, gasPrice } = this.props;
    return (
      <ScreenContainer title={"Send OPQ"}>
        <ScreenDescription>
          To complete this transaction, send <Cost>{cost} OPQ</Cost> with gas
          price of<br /> <Cost>{gasPrice} Gwei</Cost> to the address listed
          below:
        </ScreenDescription>
        <Label>Address</Label>
        <EthAddress>{ethAddress}</EthAddress>
        <CopyToClipboard
          text={ethAddress}
          onCopy={() => this.setState({ isCopied: true })}>
          <CopyButton>
            <Icon src={ICON_COPY} />
            {this.state.isCopied ? "Copied!" : "Copy Address"}
          </CopyButton>
        </CopyToClipboard>
      </ScreenContainer>
    );
  }
}

export default PaymentInvoiceSlide;
