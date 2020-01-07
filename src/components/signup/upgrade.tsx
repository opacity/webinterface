import React from "react";
import { connect } from "react-redux";

import signupActions from "../../redux/actions/signup-actions";
import fiatPaymentActions from "../../redux/actions/fiat-payment-actions";
import metamaskActions from "../../redux/actions/metamask-actions";
import UpgradeAccount from "./upgrade-account";

import { PLANS, UPGRADE_PHASES } from "../../config";

const mapStateToProps = (state, props) => {
  const plan = PLANS.filter(p => p.isAvailable).find(
    p => p.permalink === props.match.params.plan
  );
  return {
    plan,
    phase: plan ? state.signup.phase : UPGRADE_PHASES.SELECT_PLAN,
    fiatPaymentError: state.fiatPayment.error,
    fiatPaymentStatus: state.fiatPayment.status
  };
};

const mapDispatchToProps = dispatch => ({
  accountPaidSuccess: () => dispatch(signupActions.accountPaidSuccess()),
  pollPayment: waitForPaymentFn =>
    dispatch(signupActions.pollPayment({ waitForPaymentFn })),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice })),
  payFiat: ({ stripeToken, masterHandle, timestamp }) =>
    dispatch(
      fiatPaymentActions.payFiat({ stripeToken, masterHandle, timestamp })
    )
});

const SignUp = ({
  isCustom,
  phase,
  plan,
  fiatPaymentStatus,
  fiatPaymentError,
  accountPaidSuccess,
  invoice,
  pollPayment,
  openMetamask,
  payFiat
}) => (
  <UpgradeAccount
    isCustom={isCustom}
    fiatPaymentError={fiatPaymentError}
    fiatPaymentStatus={fiatPaymentStatus}
    openMetamask={openMetamask}
    payFiat={payFiat}
    accountPaidSuccess={accountPaidSuccess}
    phase={phase}
    plan={plan}
    pollPayment={pollPayment}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
