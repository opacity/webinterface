import React from "react";
import { connect } from "react-redux";

import signupActions from "../../redux/actions/signup-actions";
import metamaskActions from "../../redux/actions/metamask-actions";
import CreateAccount from "./create-account";

const mapStateToProps = state => ({
  phase: state.signup.phase
});

const mapDispatchToProps = dispatch => ({
  setPrivateKey: privateKey =>
    dispatch(signupActions.setPrivateKey({ privateKey })),
  pollPayment: masterHandle =>
    dispatch(signupActions.pollPayment({ masterHandle })),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const SignUp = ({
  phase,
  setPrivateKey,
  invoice,
  pollPayment,
  openMetamask
}) => (
  <CreateAccount
    phase={phase}
    setPrivateKey={setPrivateKey}
    openMetamask={openMetamask}
    pollPayment={pollPayment}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
