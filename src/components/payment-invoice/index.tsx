import React from "react";
import { connect } from "react-redux";

import PaymentInvoiceSlide from "./payment-invoice-slide";
import metamaskActions from "../../redux/actions/metamask-actions";

const mapStateToProps = state => ({
  cost: state.upload.invoice.cost,
  ethAddress: state.upload.invoice.ethAddress,
  gasPrice: state.upload.gasPrice
});
const mapDispatchToProps = dispatch => ({
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const PaymentInvoice = ({ cost, ethAddress, gasPrice, openMetamask }: any) => (
  <PaymentInvoiceSlide
    cost={cost}
    ethAddress={ethAddress}
    gasPrice={gasPrice}
    openMetamask={openMetamask}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentInvoice);
