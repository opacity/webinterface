import React from "react";
import { connect } from "react-redux";

import HeaderButtonsComponent from "./header-buttons";
import authenticationActions from "../../../redux/actions/authentication-actions";

const mapStateToProps = state => ({
  authentication: state.authentication.status
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authenticationActions.logout())
});

const HeaderButtons = ({ authentication, logout }) => (
  <HeaderButtonsComponent authentication={authentication} logout={logout} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderButtons);
