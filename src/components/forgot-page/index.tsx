import React from "react";
import { connect } from "react-redux";

import authenticationActions from "../../redux/actions/authentication-actions";

import ForgotPageSlide from "./forgot-page-slide";

const mapStateToProps = state => ({
  hasError: state.authentication.hasError
});

const mapDispatchToProps = dispatch => ({
  recoverAccountHandle: mnemonic =>
    dispatch(authenticationActions.recoverAccountHandle({ mnemonic })),
  resetError: () => dispatch(authenticationActions.resetRecoverError())
});

const ForgotPage = ({ recoverAccountHandle, hasError, resetError }) => (
  <ForgotPageSlide
    recoverAccountHandle={recoverAccountHandle}
    hasError={hasError}
    resetError={resetError}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPage);
