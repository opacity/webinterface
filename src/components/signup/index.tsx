import React from "react";
import { connect } from "react-redux";

import signupActions from "../../redux/actions/signup-actions";
import metamaskActions from "../../redux/actions/metamask-actions";
import CreateAccount from "./create-account";

const mapStateToProps = state => ({
  invoice: state.signup.invoice
});

const mapDispatchToProps = dispatch => ({
  getInvoice: (privateKey, storagePin) =>
    dispatch(signupActions.getInvoicePending({ privateKey, storagePin })),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const SignUp = ({ invoice, getInvoice }) => (
  <CreateAccount invoice={invoice} getInvoice={getInvoice} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
