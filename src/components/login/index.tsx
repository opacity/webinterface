import React from "react";
import { connect } from "react-redux";

import authenticationActions from "../../redux/actions/authentication-actions";
import LoginSlide from "./login-slide";

const mapStateToProps = state => ({
  status: state.authentication.status
});

const mapDispatchToProps = dispatch => ({
  login: (privateKey, storagePin) =>
    dispatch(authenticationActions.loginPending({ privateKey, storagePin }))
});

const Login = ({ login, status }) => (
  <LoginSlide login={login} status={status} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);