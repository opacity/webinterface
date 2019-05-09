import React from "react";
import { connect } from "react-redux";

import TeamPageSlide from "./team-page-slide";

import { AUTHENTICATION_STATUSES } from "../../config";

const mapStateToProps = state => ({
  authenticationStatus: state.authentication.status
});

const mapDispatchToProps = dispatch => ({});

const TeamPage = ({ authenticationStatus }) => (
  <TeamPageSlide
    isLoggedIn={authenticationStatus === AUTHENTICATION_STATUSES.LOGGED_IN}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamPage);
