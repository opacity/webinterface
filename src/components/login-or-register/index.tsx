import React from "react";
import { connect } from "react-redux";

import LoginOrRegisterSlide from "./login-or-register-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const LoginOrRegister = () => <LoginOrRegisterSlide />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginOrRegister);
