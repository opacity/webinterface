import React from "react";
import { connect } from "react-redux";

import HeaderButtonsComponent from "./header-buttons";
import authenticationActions from "../../../redux/actions/authentication-actions";

import { AUTHENTICATION_STATUSES } from "../../../config";

const mapStateToProps = state => ({
  authentication: state.authentication.status
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authenticationActions.logout())
});

const HeaderButtons = ({ authentication, logout }) => (
  <HeaderButtonsComponent
    authentication={authentication === AUTHENTICATION_STATUSES.LOGGED_IN}
    logout={logout}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderButtons);
