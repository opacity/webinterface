import React from "react";
import { connect } from "react-redux";

import signupActions from "../../redux/actions/signup-actions";
import metamaskActions from "../../redux/actions/metamask-actions";
import CreateAccount from "./create-account";

const mapStateToProps = state => ({
  phase: state.signup.phase
});

const mapDispatchToProps = dispatch => ({
  showAddress: () => dispatch(signupActions.showAddress()),
  pollPayment: waitForPaymentFn =>
    dispatch(signupActions.pollPayment({ waitForPaymentFn })),
  goBack: () => dispatch(signupActions.goBack()),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const SignUp = ({
  phase,
  goBack,
  showAddress,
  invoice,
  pollPayment,
  openMetamask
}) => (
  <CreateAccount
    phase={phase}
    showAddress={showAddress}
    openMetamask={openMetamask}
    pollPayment={pollPayment}
    goBack={goBack}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
