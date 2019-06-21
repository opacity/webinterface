import React from "react";
import { connect } from "react-redux";

import authenticationActions from "../../redux/actions/authentication-actions";

import ForgotPageSlide from "./forgot-page-slide";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  recoverAccountHandle: mnemonic =>
    dispatch(authenticationActions.recoverAccountHandle({ mnemonic }))
});

const ForgotPage = ({ recoverAccountHandle }) => (
  <ForgotPageSlide recoverAccountHandle={recoverAccountHandle} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPage);
