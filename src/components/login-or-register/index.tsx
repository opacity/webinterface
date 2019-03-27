import React from "react";
import { connect } from "react-redux";

import authenticationActions from "../../redux/actions/authentication-actions";
import LoginOrRegisterSlide from "./login-or-register-slide";

const mapStateToProps = state => ({
  status: state.authentication.status
});

const mapDispatchToProps = dispatch => ({
  login: (privateKey, storagePin) =>
    dispatch(authenticationActions.loginPending({ privateKey, storagePin }))
});

const LoginOrRegister = ({ login, status }) => (
  <LoginOrRegisterSlide login={login} status={status} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginOrRegister);
