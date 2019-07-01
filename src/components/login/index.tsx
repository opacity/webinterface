import React from "react";
import { connect } from "react-redux";

import authenticationActions from "../../redux/actions/authentication-actions";
import LoginSlide from "./login-slide";

const mapStateToProps = state => ({
  status: state.authentication.status,
  recoveryHandle: state.authentication.recoveryHandle
});

const mapDispatchToProps = dispatch => ({
  login: privateKey =>
    dispatch(authenticationActions.loginPending({ privateKey }))
});

const Login = ({ login, status, recoveryHandle }) => (
  <LoginSlide login={login} status={status} recoveryHandle={recoveryHandle} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
