import React from "react";
import { connect } from "react-redux";

import authenticationActions from "../../redux/actions/authentication-actions";
import LoginOrRegisterSlide from "./login-or-register-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: (privateKey, storagePin) =>
    dispatch(authenticationActions.loginPending({ privateKey, storagePin }))
});

const LoginOrRegister = ({ login }) => <LoginOrRegisterSlide login={login} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginOrRegister);
