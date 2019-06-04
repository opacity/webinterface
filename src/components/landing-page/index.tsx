import React from "react";
import { connect } from "react-redux";

import subscriptionActions from "../../redux/actions/subscription-actions";
import LandingPageSlide from "./landing-page-slide";

import { AUTHENTICATION_STATUSES } from "../../config";

const mapStateToProps = state => ({
  authenticationStatus: state.authentication.status
});

const mapDispatchToProps = dispatch => ({
  setSubscription: item =>
    dispatch(subscriptionActions.setSubscription({ item }))
});

const LandingPage = ({ authenticationStatus, setSubscription }) => (
  <LandingPageSlide
    isLoggedIn={authenticationStatus === AUTHENTICATION_STATUSES.LOGGED_IN}
    setSubscription={setSubscription}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
