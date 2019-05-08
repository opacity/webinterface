import React from "react";
import { connect } from "react-redux";

import Contents from "./contents";

import { AUTHENTICATION_STATUSES } from "../../config";

const mapStateToProps = state => ({
  authenticationStatus: state.authentication.status
});

const mapDispatchToProps = dispatch => ({});

const Agreement = ({ authenticationStatus, type, title }) => (
  <Contents
    type={type}
    title={title}
    isLoggedIn={authenticationStatus === AUTHENTICATION_STATUSES.LOGGED_IN}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Agreement);
