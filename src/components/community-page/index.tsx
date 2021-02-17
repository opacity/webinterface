import React from "react";
import { connect } from "react-redux";

import CommunityPageSlide from "./community-page-slide";

import { AUTHENTICATION_STATUSES } from "../../config";

const mapStateToProps = state => ({
  authenticationStatus: state.authentication.status
});

const mapDispatchToProps = dispatch => ({});

const CommunityPage = ({ authenticationStatus }) => (
  <CommunityPageSlide
    isLoggedIn={authenticationStatus === AUTHENTICATION_STATUSES.LOGGED_IN}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage);
