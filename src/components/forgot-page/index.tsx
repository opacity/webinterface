import React from "react";
import { connect } from "react-redux";

import authenticationActions from "../../redux/actions/authentication-actions";

import ForgotPageSlide from "./forgot-page-slide";

const mapStateToProps = state => ({
  error: state.authentication.error
});

const mapDispatchToProps = dispatch => ({
  recoverAccountHandle: mnemonic =>
    dispatch(authenticationActions.recoverAccountHandle({ mnemonic })),
  resetError: () => dispatch(authenticationActions.resetRecoverError())
});

const ForgotPage = ({ recoverAccountHandle, error, resetError }) => (
  <ForgotPageSlide
    recoverAccountHandle={recoverAccountHandle}
    error={error}
    resetError={resetError}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPage);
