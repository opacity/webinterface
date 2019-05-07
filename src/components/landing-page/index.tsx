import React from "react";
import { connect } from "react-redux";

import LandingPageSlide from "./landing-page-slide";

import { AUTHENTICATION_STATUSES } from "../../config";

const mapStateToProps = state => ({
  authentication: state.authentication.status
});

const mapDispatchToProps = dispatch => ({});

const LandingPage = ({ authentication }) => (
  <LandingPageSlide
    authentication={authentication === AUTHENTICATION_STATUSES.LOGGED_IN}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
