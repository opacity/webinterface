import React from "react";
import { connect } from "react-redux";

import authenticationActions from "../../redux/actions/authentication-actions";
import LoginSlide from "./login-slide";

const mapStateToProps = state => ({
  status: state.authentication.status,
  recoverHandle: state.authentication.recoverHandle
});

const mapDispatchToProps = dispatch => ({
  login: privateKey =>
    dispatch(authenticationActions.loginPending({ privateKey }))
});

const Login = ({ login, status, recoverHandle }) => (
  <LoginSlide login={login} status={status} recoverHandle={recoverHandle} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
