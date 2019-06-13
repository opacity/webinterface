import React from "react";
import { connect } from "react-redux";

import signupActions from "../../redux/actions/signup-actions";
import metamaskActions from "../../redux/actions/metamask-actions";
import CreateAccount from "./create-account";

import { PLANS, SIGNUP_PHASES } from "../../config";

const mapStateToProps = (state, props) => {
  const plan = PLANS.find(p => p.permalink === props.match.params.plan);
  return {
    plan,
    phase: plan ? state.signup.phase : SIGNUP_PHASES.SELECT_PLAN
  };
};

const mapDispatchToProps = dispatch => ({
  showMnemonic: () => dispatch(signupActions.showMnemonic()),
  showAddress: () => dispatch(signupActions.showAddress()),
  pollPayment: waitForPaymentFn =>
    dispatch(signupActions.pollPayment({ waitForPaymentFn })),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const SignUp = ({
  phase,
  plan,
  showMnemonic,
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
    plan={plan}
    showMnemonic={showMnemonic}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
