import React from "react";
import { connect } from "react-redux";

import subscriptionActions from "../../redux/actions/subscription-actions";
import SubscriptionSlide from "./subscription-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setSubscription: item =>
    dispatch(subscriptionActions.setSubscription({ item }))
});

const Subscription = ({ setSubscription }) => {
  return <SubscriptionSlide setSubscription={setSubscription} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscription);
