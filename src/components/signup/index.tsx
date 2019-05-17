import React from "react";
import { connect } from "react-redux";

import signupActions from "../../redux/actions/signup-actions";
import metamaskActions from "../../redux/actions/metamask-actions";
import CreateAccount from "./create-account";

const mapStateToProps = state => ({
  invoice: state.signup.invoice,
  phase: state.signup.phase,
  privateKey: state.signup.privateKey
});

const mapDispatchToProps = dispatch => ({
  setPrivateKey: privateKey =>
    dispatch(signupActions.setPrivateKey({ privateKey })),
  getInvoice: (privateKey, storagePin) =>
    dispatch(signupActions.getInvoicePending({ privateKey, storagePin })),
  goBack: () => dispatch(signupActions.goBack()),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const SignUp = ({
  phase,
  setPrivateKey,
  privateKey,
  invoice,
  getInvoice,
  openMetamask,
  goBack
}) => (
  <CreateAccount
    phase={phase}
    setPrivateKey={setPrivateKey}
    privateKey={privateKey}
    invoice={invoice}
    openMetamask={openMetamask}
    getInvoice={getInvoice}
    goBack={goBack}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
