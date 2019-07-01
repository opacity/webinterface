import React from "react";
import { connect } from "react-redux";

import signupActions from "../../redux/actions/signup-actions";
import fiatPaymentActions from "../../redux/actions/fiat-payment-actions";
import metamaskActions from "../../redux/actions/metamask-actions";
import CreateAccount from "./create-account";

import { PLANS, SIGNUP_PHASES } from "../../config";

const mapStateToProps = (state, props) => {
  const plan = PLANS.find(p => p.permalink === props.match.params.plan);
  return {
    plan,
    phase: plan ? state.signup.phase : SIGNUP_PHASES.SELECT_PLAN,
    fiatPaymentError: state.fiatPayment.error,
    fiatPaymentStatus: state.fiatPayment.status
  };
};

const mapDispatchToProps = dispatch => ({
  showMnemonic: () => dispatch(signupActions.showMnemonic()),
  showAddress: () => dispatch(signupActions.showAddress()),
  pollPayment: waitForPaymentFn =>
    dispatch(signupActions.pollPayment({ waitForPaymentFn })),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice })),
  payFiat: ({ token, masterHandle }) =>
    dispatch(fiatPaymentActions.payFiat({ token, masterHandle }))
});

const SignUp = ({
  phase,
  plan,
  fiatPaymentStatus,
  fiatPaymentError,
  showMnemonic,
  showAddress,
  invoice,
  pollPayment,
  openMetamask,
  payFiat
}) => (
  <CreateAccount
    fiatPaymentError={fiatPaymentError}
    fiatPaymentStatus={fiatPaymentStatus}
    openMetamask={openMetamask}
    payFiat={payFiat}
    phase={phase}
    plan={plan}
    pollPayment={pollPayment}
    showAddress={showAddress}
    showMnemonic={showMnemonic}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
