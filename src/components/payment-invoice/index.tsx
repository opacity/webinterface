import React from "react";
import { connect } from "react-redux";

import PaymentInvoiceSlide from "./payment-invoice-slide";

const mapStateToProps = state => ({
  cost: state.upload.invoice.cost,
  ethAddress: state.upload.invoice.ethAddress,
  gasPrice: state.upload.gasPrice
});
const mapDispatchToProps = dispatch => ({});

const PaymentInvoice = ({ cost, ethAddress, }: any) => (
  <PaymentInvoiceSlide
    cost={cost}
    ethAddress={ethAddress}
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(PaymentInvoice);
