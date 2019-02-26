import React from "react";
import { connect } from "react-redux";

import signupActions from "../../redux/actions/signup-actions";
import metamaskActions from "../../redux/actions/metamask-actions";
import CreateAccount from "./create-account";

const mapStateToProps = state => ({
  cost: state.signup.invoice ? state.signup.invoice.cost : null,
  ethAddress: state.signup.invoice ? state.signup.invoice.ethAddress : null,
  gasPrice: state.signup.gasPrice
});

const mapDispatchToProps = dispatch => ({
  setPrivateKey: privateKey =>
    dispatch(signupActions.setPrivateKey({ privateKey })),
  setStoragePin: storagePin =>
    dispatch(signupActions.setStoragePin({ storagePin })),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const SignUp = ({
  cost,
  ethAddress,
  gasPrice,
  setPrivateKey,
  handle,
  setStoragePin
}) => (
  <CreateAccount
    handle={handle}
    cost={16}
    gasPrice={gasPrice}
    ethAddress={ethAddress}
    setStoragePin={setStoragePin}
    setPrivateKey={setPrivateKey}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
