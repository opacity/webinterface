import React from "react";
import { connect } from "react-redux";

import SubscriptionSlide from "./subscription-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const Subscription = () => {
  return <SubscriptionSlide />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscription);
