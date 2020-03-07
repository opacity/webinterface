import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import upgradeActions from "../../redux/actions/upgrade-actions";
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
    phase: plan ? state.upgrade.phase : UPGRADE_PHASES.SELECT_PLAN,
    fiatPaymentError: state.fiatPayment.error,
    fiatPaymentStatus: state.fiatPayment.status,
    masterHandle: state.authentication.masterHandle
  };
};

const mapDispatchToProps = dispatch => ({
  accountPaidSuccess: () => dispatch(upgradeActions.accountPaidSuccess()),
  pollPayment: waitForPaymentFn =>
    dispatch(upgradeActions.pollPayment({ waitForPaymentFn })),
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice })),
  payFiat: ({ stripeToken, masterHandle, timestamp }) =>
    dispatch(
      fiatPaymentActions.payFiat({ stripeToken, masterHandle, timestamp })
    )
});

const Upgrade = ({
  isCustom,
  phase,
  plan,
  fiatPaymentStatus,
  fiatPaymentError,
  accountPaidSuccess,
  invoice,
  pollPayment,
  openMetamask,
  payFiat,
  masterHandle
}) => (
  masterHandle
  ? (
    <UpgradeAccount
      isCustom={isCustom}
      fiatPaymentError={fiatPaymentError}
      fiatPaymentStatus={fiatPaymentStatus}
      openMetamask={openMetamask}
      payFiat={payFiat}
      accountPaidSuccess={accountPaidSuccess}
      phase={phase}
      plan={plan}
      invoice={invoice}
      pollPayment={pollPayment}
      masterHandle={masterHandle}
    />
  )
  : (
    <Redirect to="/login" />
  )
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upgrade);
